'use strict';
const ava = require('ava');
const {URL} = require('url');
const Imap = require('imap');

require('../../scope/h1');
const tests = require('../../lib/tests');
const config = require('lib/config');

const active_project = config.get('profile.project._id');

ava.serial('project life cycle', async t => {
    const project = await tests.run(`project show --project ${active_project}`);
    const active_organisation = project.organisation;
    const createParams = `--name ${tests.getName('project-life-cycle')} --organisation ${active_organisation}`;

    await tests.resourceLifeCycle('project', {
        createParams: createParams,
        stateCreated: 'Limited',
        skipHistoryCreated: true,
        skipService: true,
        skipTag: true,
    })(t);
});

ava.serial('project show', async t => {
    const project = await tests.run(`project show --project ${active_project}`);
    t.true(project._id === active_project);
});

const getOrganisationForProject = async projectId => (await tests.run(`project show --project '${projectId}'`)).organisation;

ava.skip('project transfer', tests.requireSlaveProject(async (t, projects) => {
    let active_organisation, slave_organisation;
    if (Math.floor(Math.random() * 2) === 0) {
        active_organisation = await getOrganisationForProject(active_project);
        slave_organisation = await getOrganisationForProject(projects.slave);
    } else {
        active_organisation = await getOrganisationForProject(projects.slave);
        slave_organisation = await getOrganisationForProject(active_project);
    }

    const project = await tests.run(`project create --name ${tests.getName('project-transfer')} --organisation ${active_organisation}`);

    await tests.run(`project transfer --project ${project._id} --organisation ${slave_organisation}`);
    const transfer_list = await tests.run(`organisation transfer list --organisation ${slave_organisation}`);
    t.true(transfer_list.some(x => x._id === project._id));

    const payment_list = await tests.run(`organisation payment list --organisation ${slave_organisation}`);
    const free_payment = payment_list.find(x => !x.project);
    t.true(!!free_payment, `No free payment on organization ${slave_organisation}`);
    await tests.run(`organisation transfer accept --organisation ${slave_organisation} --project ${project._id} --payment ${free_payment._id}`);
    const transfered_project = await tests.run(`project show --project ${project._id}`);
    t.true(transfered_project.organisation === slave_organisation);

    await tests.remove('project', project);
}));

ava.serial('project rename', async t => {
    const name = tests.getName('Project for monitoring public API');

    await tests.run(`project rename --project '${active_project}' --new-name '${name}'`);

    const project = await tests.run(`project show --project ${active_project}`);
    t.true(project._id === active_project);
    t.true(project.name === name);
});

ava.serial('project limits', async t => {
    const limits = await tests.run('project limit');
    t.true(limits.some(d => d.resource === 'vm' && d.limit === 'count'));
});

ava.serial('project list', async t => {
    const list = await tests.run('project list');
    t.true(list.length > 0);
});

ava.serial('project access of user cycle', tests.resourceAccessOfUser('project', `--project ${active_project}`));

ava.serial('project token life cycle', async t => {
    const commonParams = `--project '${active_project}'`;
    const token = await tests.run(`project token add ${commonParams} --name ${tests.getName(t.title)}`);

    await tests.subresourceLifeCycle({
        resourceType: 'project',
        resourceId: active_project,
        type: 'token',
        skipRename: false,
    })(t);

    await tests.remove('project token', token, {
        deleteParams: commonParams,
    });
});

ava.serial('project notification credits edit', async t => {
    const commonParams = `--project ${active_project}`;
    const limit = Math.round(Math.random() * 1000000);

    // Verify randomness of limit
    const limits = await tests.run(`project notification credits list ${commonParams}`);
    t.true(!limits.includes(limit));

    // Add limit
    await tests.run(`project notification credits add ${commonParams} --limit ${limit}`);

    const new_limits = await tests.run(`project notification credits list ${commonParams}`);
    t.true(new_limits.includes(limit));

    // Delete limit (cleanup)
    await tests.run(`project notification credits delete ${commonParams} --limit ${limit}`);

    const newest_limits = await tests.run(`project notification credits list ${commonParams}`);
    t.true(!newest_limits.includes(limit));
});

const getImapOptions = imapUrl => {
    const parsed_url = new URL(imapUrl);
    return {
        user: parsed_url.username ?
            decodeURIComponent(parsed_url.username) :
            undefined,
        password: parsed_url.password ?
            decodeURIComponent(parsed_url.password) :
            undefined,
        host: parsed_url.hostname,
        port: parsed_url.protocol === 'imaps:' ?
            parsed_url.port || 993 :
            parsed_url.port || 143,
        tls: parsed_url.protocol === 'imaps:',
    };
};

const getLatestImapMessageDate = (query, options) => new Promise((resolve, reject) => {
    const imap = new Imap(options);
    imap.once('ready', () => {
        imap.openBox('INBOX', true, err => {
            if (err) return reject(err);
            const dates = [];

            imap.search(query, function (err, results) {
                if (err) return reject(err);
                const f = imap.fetch(results, {
                    bodies: ['HEADER.FIELDS (DATE)'],
                });
                f.on('message', msg => {
                    msg.once('body', stream => {
                        let buffer = '';
                        stream.on('data', function (chunk) {
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', function () {
                            const date = new Date(Imap.parseHeader(buffer).date[0]);
                            dates.push(date);
                        });
                    });

                });

                f.once('error', reject);
                f.once('end', function () {
                    imap.end();
                    if (!dates) {
                        return reject('No message received');
                    }
                    return resolve(new Date(Math.max.apply(null, dates)));
                });
            });
        });
    });
    imap.once('error', reject);
    imap.connect();
});

const dateDiffMinutes = (date1, date2) => {
    return Math.abs((date1 - date2) / 1000 / 60 / 60);
};

ava.serial('project notification credits integration test', async t => {
    // The total execution time of test should not exceed 300 seconds (5 minutes).
    // Now the maximum timeout is 20 * 1 + 15 * 10 = 20 + 150 = 170
    // Otherwise an following error will occur:
    // Exited because no new tests completed within the last 300000ms of inactivity
    const commonParams = `--project ${active_project}`;
    const project = await tests.run(`project show ${commonParams}`);

    const credits = project.billing.credits;
    const limit = credits - 0.01;

    await tests.run(`project notification credits add ${commonParams} --limit ${limit}`);
    const disk = await tests.run(`disk create --name ${tests.getName('credits-apply')} --type ssd --size 20`);
    let charged = false;
    const charge_timeout = 60;
    for (let i = 0; i < charge_timeout; i++) {
        await tests.delay(1000); // to apply charges from the queue
        const charged_project = await tests.run(`project show ${commonParams}`);
        const charged_credits = charged_project.billing.credits;
        if (credits !== charged_credits) {
            console.log(`Hit limit ${limit} after charged from ${credits} to ${charged_credits}`);
            charged = true;
            break;
        }
    }
    t.true(charged, `Timeout ${charge_timeout} seconds to apply charges.`);
    await tests.run(`project notification credits delete ${commonParams} --limit ${limit}`);
    await tests.remove('disk', disk);

    const month = new Date().toLocaleString('en-us', {month: 'long'});
    const day = new Date().getDay();
    const year = new Date().getMonth();
    const query = ['ALL',
        ['SINCE', `${month} ${day}, ${year}`],
        ['SUBJECT', 'Osiągnięty próg środków'],
    ];

    const options = getImapOptions(process.env.IMAP_URL);

    let received_mail = false;
    for (let i = 0; i < 10; i++) {
        await tests.delay(15 * 1000); // to delivery messages to mailbox
        const latest_date = await getLatestImapMessageDate(query, options);
        if (dateDiffMinutes(new Date(), new Date(latest_date)) < 5) {
            received_mail = true;
            break;
        }
    }
    t.true(received_mail, `Timeout ${15 * 10} seconds to receive mail.`);
});

ava.serial('project token access life cycle', async t => {
    const token = await tests.run(`project token add --project ${active_project} --name ${tests.getName('test-project-token')}`);
    const access = await tests.run(`project token access add --project ${active_project} --method POST --path 'vault/' --token ${token._id}`);

    await tests.subresourceLifeCycle({
        resourceId: token._id,
        resourceType: 'project token',
        type: 'access',
        skipRename: true,
        commonParams: `--project ${active_project}`,
    })(t);

    await tests.remove('project token access', access, {
        deleteParams: `--project ${active_project} --token ${token._id}`,
    });

    await tests.remove('project token', token);
});

ava.serial('token was used if environment variable set', async t => {
    const token = await tests.run(`project token add --name ${tests.getName('token-validates')} --project ${active_project}`);

    // Clean up default access
    const access_list = await tests.run(`project token access list --project ${active_project} --token ${token._id}`);
    for (const access of access_list) {
        await tests.run(`project token access delete --token ${token._id} --access ${access._id} --yes`);
    }

    await tests.run(`project token access add --token ${token._id} --method GET --path '/vm'`);

    await t.throwsAsync(() => tests.run({
        cmd: 'disk list',
        env: {
            H1_TOKEN: token._id,
        },
    }));

    await tests.remove('project token', token, {
        deleteParams: `--project ${active_project}`,
    });
});

// ava.serial('project access rule life cycle', async t => {
//     await tests.accessRuleLifeCycle(t, 'project access rule', `--project ${active_project}`);
// });

ava.serial('project select', tests.requireSlaveProject(async (t, projects) => {
    const new_ip = await tests.run('ip create');
    await tests.run(`project select --project '${projects.slave}'`);
    const ip_list = await tests.run('ip list');
    await tests.run(`project select --project '${projects.master}'`);
    t.true(!ip_list.some(ip => ip._id === new_ip._id));
    await tests.remove('ip', new_ip);
}));

ava.serial('project credentials life cycle', tests.credentialsLifeCycle('project credentials', {
    createParams: `--project ${active_project}`,
    listParams: `--project ${active_project}`,
}));

ava.todo('project logging');
