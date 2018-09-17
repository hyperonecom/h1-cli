'use strict';
const ava = require('ava');
const { URL } = require('url');
const Imap = require('imap');

require('../../scope/h1');
const tests = require('../../lib/tests');
const config = require('lib/config');

const now = Date.now();

const active_project = config.get('profile.project._id');

const token_name = `test-project-token-${now}`;

ava.test.todo('project delete');

ava.test.todo('project select');

ava.test.serial('project show', async t => {
    const project = await tests.run(`project show --project ${active_project}`);
    t.true(project._id === active_project);
});

ava.test.serial('project rename', async t => {
    const name = `Project for monitoring public API - ${now}`;

    await tests.run(`project rename --project ${active_project} --new-name '${name}'`);

    const project = await tests.run(`project show --project ${active_project}`);
    t.true(project._id === active_project);
    t.true(project.name === name);
});


ava.test.serial('project limits', async t => {
    const limits = await tests.run('project limit');
    t.true(limits.some(d => d.resource === 'vm' && d.limit === 'count'));
});

ava.test.serial('project list', async t => {
    const list = await tests.run('project list');
    t.true(list.length > 0);
});

['user', 'owner', 'billing'].forEach(role => {
    ava.test.serial(`project access ${role} cycle`, async t => {
        const actions = [
            {name: 'grant', result: true, params: `--role ${role}`},
            {name: 'revoke', result: false},
        ];

        for (const action of actions) {
            await tests.run(`project access ${action.name} --email ${tests.RECIPIENT.user} --project ${active_project} ${action.params || ''}`);
            const list = await tests.run('project access list');
            t.true(list.some(d => d.role === role && d.id === tests.RECIPIENT.user) === action.result);
        }
    });
});


ava.test.serial('project token life cycle', async t => {
    const commonParams = `--project ${active_project}`;
    const token = await tests.run(`project token add ${commonParams} --name ${token_name}`);

    const tokenParams = `${commonParams} --token ${token._id}`;

    const token_list = await tests.run('project token list');
    t.true(token_list.some(d => d.name === token_name));

    const refreshed_token = await tests.run(`project token show ${tokenParams}`);
    t.true(token._id === refreshed_token._id);

    await tests.remove('project token', token);
});

ava.test.serial('project token rename', async t => {
    const new_name = `renamed-${token_name}`;

    const commonParams = `--project ${active_project}`;
    const token = await tests.run(`project token add ${commonParams} --name ${token_name}`);

    await tests.run(`project token rename --token ${token.name} --new-name ${new_name}`);

    const refreshed_token = await tests.run(`project token show ${commonParams} --token ${new_name}`);
    t.true(refreshed_token._id === token._id);
    t.true(refreshed_token.name === new_name);

    await tests.remove('project token', token);
});

ava.test.serial('project notification credits edit', async t => {
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

ava.test.serial('project notification credits integration test', async t => {
    // The total execution time of test should not exceed 300 seconds (5 minutes).
    // Now the maximum timeout is 20 * 1 + 15 * 10 = 20 + 150 = 170
    // Otherwise an following error will occur:
    // Exited because no new tests completed within the last 300000ms of inactivity
    const commonParams = `--project ${active_project}`;
    const project = await tests.run(`project show ${commonParams}`);

    const credits = project.billing.credits;
    const limit = credits - 0.01;

    await tests.run(`project notification credits add ${commonParams} --limit ${limit}`);
    const disk = await tests.run(`disk create --name credits-apply-${now} --type ssd --size 20`);
    let charged = false;
    for (let i=0; i<20; i++) {
        const charged_project = await tests.run(`project show ${commonParams}`);
        const charged_credits = charged_project.billing.credits;
        if (credits !== charged_credits) {
            console.log(`Hit limit ${limit} after charged from ${credits} to ${charged_credits}`);
            charged = true;
            break;
        }
        await tests.delay(1000); // to apply charges from the queue
    }
    t.true(charged);
    await tests.run(`project notification credits delete ${commonParams} --limit ${limit}`);
    await tests.remove('disk', disk);

    const month = new Date().toLocaleString('en-us', { month: 'long' });
    const day = new Date().getDay();
    const year = new Date().getMonth();
    const query = ['ALL',
        ['SINCE', `${month} ${day}, ${year}`],
        ['SUBJECT', 'Osiągnięty próg środków'],
    ];

    const options = getImapOptions(process.env.IMAP_URL);

    let received_mail = false;
    for (let i=0; i<10; i++) {
        const latest_date = await getLatestImapMessageDate(query, options);
        if (dateDiffMinutes(new Date(), new Date(latest_date)) < 5) {
            received_mail = true;
            break;
        }
        await tests.delay(15*1000); // to delivery messages to mailbox
    }
    t.true(received_mail);
});

ava.test.serial('project token access life cycle', async t => {
    const history = [];

    const run = cmd => tests.run({
        cmd: cmd, history: history,
    });
    const token = await run(`project token add --project ${active_project} --name test-project-token-${now}`);

    const access = await run(`project token access add --project ${active_project} --method POST --path 'vault/' --token ${token._id}`);

    const tokenParams = `--project ${active_project} --token ${token._id}`;
    const access_list = await run(`project token access list ${tokenParams}`);

    t.true(access_list.some(d => d._id === access._id));

    const refreshed_access = await run(`project token access show ${tokenParams} --access ${access._id}`);

    t.true(access._id === refreshed_access._id);

    await run(`project token access delete ${tokenParams} --access ${access._id} --yes`);


    const access_list_deleted = await run(`project token access list ${tokenParams}`);

    t.false(access_list_deleted.some(d => d._id === access._id));

    await tests.remove('project token', token);
});

ava.test.serial('token was used if environment variable set', async t => {
    const token = await tests.run(`project token add --name token-validates-${now} --project ${active_project}`);

    // Clean up default access
    const access_list = await tests.run(`project token access list --project ${active_project} --token ${token._id}`);
    for (const access of access_list) {
        await tests.run(`project token access delete --token ${token._id} --access ${access._id} --yes`);
    }

    await tests.run(`project token access add --token ${token._id} --method GET --path '/vm'`);

    await t.throws(() => tests.run({
        cmd: 'disk list',
        env: {
            H1_TOKEN: token._id,
        },
    }));

    await tests.remove('project token', token);
});

ava.test.serial('project credentials life cycle', tests.credentialsLifeCycle('project credentials', {
    createParams: `--project ${active_project}`,
    listParams: `--project ${active_project}`,
}));
