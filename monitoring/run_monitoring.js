'use strict';
const mailer = require('nodemailer');
const childProcess = require('child_process');
const shell_quote = require('shell-quote');
require('../scope/h1');
process.env[`${process.env.SCOPE_FULL_NAME.toUpperCase()}_EARLY_ADOPTERS`] = '1';
const tests = require('../lib/tests');
const fg = require('fast-glob');
const util = require('util');
const fs = require('fs');
const mkDir = util.promisify(fs.mkdir);

const getConfigValue = (name, options = {}) => {
    if (!process.env[name] && typeof options.defaultValue === 'undefined') {
        console.log(process.env);
        throw `${options.label || name} (${name}) variable is unset`;
    }
    const fn = options.parse || (v => v);
    return fn(process.env[name] || options.defaultValue);
};


const getConfig = () => {
    const specs = {
        SMTP_URL: {
            label: 'SMTP URL',
        },
        HYPERONE_USER: {
            label: 'HyperOne username',
        },
        HYPERONE_PASSWORD: {
            label: 'HyperOne password',
        },
        HYPERONE_PROJECT_MASTER: {
            label: 'HyperOne project ID or name',
        },
        HYPERONE_PROJECT_SLAVE: {
            label: 'HyperOne slave project ID or name',
        },
        MONITORING_EMAILS: {
            label: 'Recipients of monitoring notification',
            parse: v => v.split(','),
        },
        MONITORING_NAME: {
            label: 'Name of tests runner',
            defaultValue: 'Unknown',
        },
        MONITORING_SUCCESS_EMAILS: {
            label: 'Recipients of progress notification',
            parse: v => v.split(',').filter(x => !!x),
            defaultValue: '',
        },
        MONITORING_GLOB: {
            label: 'Pattern to match test case files',
            defaultValue: './bin/**/tests.js',
        },
        MONITORING_CMD: {
            label: 'Monitored executable',
            defaultValue: 'npx ava --verbose',
        },
        SMTP_SENDER: {
            label: 'Monitoring sender address',
            defaultValue: 'h1-cli@hyperone.com',
        },
        MONITORING_TIMEOUT: {
            label: 'Maximum execution time (seconds)',
            parse: v => parseInt(v),
            defaultValue: 60 * 30,
        },
    };

    const config = {};
    Object.entries(specs).forEach(([name, options]) => {
        config[name] = getConfigValue(name, options);
    });
    return config;
};

const keywordsMatches = (keywords, str) => keywords.some(keyword => str.includes(keyword));

const sendMail = async (config, success, report) => {
    const smtpTransport = mailer.createTransport(config.SMTP_URL);

    const recipient = success ? config.MONITORING_SUCCESS_EMAILS : config.MONITORING_EMAILS;

    const keywordsWhiteList = [
        // useful ava exception & result
        ' bin ', ' tests ', ' test ', 'text: ', 'statusCode: ',
        'message: ', 'schemaPath: ', 'dataPath: ',
        // ava test result
        ' ◌ ', ' ✖ ',
        // ava process error
        'exited with a non-zero exit',
        // own error
        'Process exited with code ',  'Process timed out after ',
        // header of files
        'tests.js ==',
        // CLI
        'error: ',
    ];
    const keywordsBlackList = ['  ✔ '];
    const subject = success ? 'Monitoring success report' : 'Monitoring failed report';
    if (recipient.length > 0) {
        await smtpTransport.sendMail({
            from: config.SMTP_SENDER,
            to: recipient,
            subject: `${config.MONITORING_NAME} ${subject}`,
            text: report.split('\n').filter(line =>
                keywordsMatches(keywordsWhiteList, line) && !keywordsMatches(keywordsBlackList, line)
            ).join('\n'),
            attachments: [
                {
                    filename: 'monitoring-report.txt',
                    content: report,
                },
            ],
        });

        if (success) {
            console.log('Success mail send!');
        } else {
            console.log('Error mail send!');
        }
    }

    await smtpTransport.close();
};

const runProcess = async (cmd, env = {}, timeout = 60 * 30) => new Promise((resolve, reject) => {
    console.log(`Started process: ${cmd}`);
    const arg = shell_quote.parse(cmd);

    const proc = childProcess.spawn(arg[0], arg.slice(1), {
        env: Object.assign({}, process.env, env),
        stdio: [null, 'pipe', 'pipe'],
    });
    let output = '';

    const killer = setTimeout(() => {
        proc.kill();
        const error = new Error(`Process ${arg[0]} timed out after ${timeout} seconds.`);
        error.output = output;
        return reject(error);
    }, timeout * 1000);

    proc.on('close', (code) => {
        clearTimeout(killer);

        if (code !== 0) {
            const error = new Error(`Process ${arg[0]} exited with code ${code}.`);
            error.code = code;
            error.output = output;
            return reject(error);
        }
        return resolve(output);
    });

    proc.stdout.on('data', (data) => {
        process.stdout.write(data);
        output += data;
    });

    proc.stderr.on('data', (data) => {
        process.stderr.write(data);
        output += data;
    });
});
const runIsolated = async (config, cmd, options={}) => {
    const project = options.project || config.HYPERONE_PROJECT_MASTER;
    const config_dir = `/tmp/${Math.random()}/`;
    await mkDir(config_dir);
    const envIsolate = {HYPERONE_CONFIG_PATH: config_dir};
    await runProcess(`h1 login --username ${config.HYPERONE_USER} --password ${config.HYPERONE_PASSWORD}`, envIsolate);
    await runProcess(`h1 project select --project ${project}`, envIsolate);
    return runProcess(cmd, envIsolate, config.MONITORING_TIMEOUT);
};

const main = async () => {
    const config = getConfig();
    const versionText = `NodeJS version: ${process.version}`;

    const files = await fg(config.MONITORING_GLOB);

    let all_pass = true;
    const runTest = async test_path => {
        let output = `== ${test_path} ==\n`;
        try {
            output+= await runIsolated(config, `${config.MONITORING_CMD} ${test_path}`);
        } catch (err) {
            all_pass = false;
            output += `${err.message}\n${err.output}\n${err.message}\n`;
        }
        return output;
    };

    const outputs = await Promise.all(files.map(runTest));
    await sendMail(config, all_pass, `${versionText}\n${outputs.join('\n')}`);
    const cleanup = [
        runIsolated(config, `./scripts/cleanup_project.sh ${config.HYPERONE_PROJECT_MASTER}`),
        runIsolated(config, `./scripts/cleanup_project.sh ${config.HYPERONE_PROJECT_SLAVE}`),
        runIsolated(config, `./scripts/revoke_user.sh ${tests.RECIPIENT.user} ${config.HYPERONE_PROJECT_MASTER}`),
        runIsolated(config, `./scripts/revoke_user.sh ${tests.RECIPIENT.user} ${config.HYPERONE_PROJECT_SLAVE}`),
    ];
    await Promise.all(cleanup.map(p => p.catch(() => {})));
};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
