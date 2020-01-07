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
const ms = require('ms');
const mkDir = util.promisify(fs.mkdir);
const superagent = require('superagent');

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
        INFLUXDB_PROTOCOL: {
            label: 'Protocol to send metrics to influxdb',
            defaultValue: 'http',
        },
        INFLUXDB_ADDRESS: {
            label: 'Address instructs exporter to send metrics to influxdb at this address.',
            defaultValue: undefined,
        },
        INFLUXDB_DATABASE: {
            label: 'InfluxDB database used when protocol is http.',
            defaultValue: 'cli_monitoring',
        },
        INFLUXDB_USERNAME: {
            label: 'InfluxDB username',
            defaultValue: undefined,
        },
        INFLUXDB_PASSWORD: {
            label: 'InfluxDB password',
            defaultValue: undefined,
        },
    };

    const config = {};
    Object.entries(specs).forEach(([name, options]) => {
        config[name] = getConfigValue(name, options);
    });
    return config;
};

const startTime = Date.now();

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
        'Process exited with code ', 'Process timed out after ',
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

const safe = text => `${text}`.replace(/[^a-zA-Z0-9\-]/g, '_');

const sendInflux = (conn, measurement, labels, fields, timestamp) => {
    const unix = `${timestamp || Date.now() * 1000000}`;

    const label_content = Object.entries(labels).map(([key, value]) => `${safe(key)}=${safe(value)}`).join(',');
    const fields_content = Object.entries(fields).map(([key, value]) => `${safe(key)}=${value}`).join(',');
    const content = `${measurement},${label_content} ${fields_content} ${unix}`;
    console.log({ measurement, labels, fields, content });
    return superagent.post(`http://${conn.address}/write`)
        .query({ db: conn.database })
        .send(content)
        .auth(conn.username, conn.password);
};

const parseMetric = async (conn, line) => {
    if (!['  ✖ ', ' ◌ ', ' ✔ '].some(y => line.includes(y))) {
        return;
    }
    if (line.includes(' ✔ ')) {
        const matches = line.trim().match(' *✔ (.+?) \\((.+?)\\)$');
        console.log({ line, matches });
        if (!matches) {
            console.log('RegExp failed');
        }
        const [, title, duration_text] = matches;
        const duration = duration_text.split(' ').map(x => ms(x)).reduce((a, b) => a + b, 0);
        console.log({ duration, duration_text });
        return sendInflux(conn, 'testcase', {
            title,
        }, {
            duration: duration,
            run: startTime,
            result: 1,
        });
    } else if (line.includes(' ✖ ')) {
        const [, title, help] = line.trim().match(' *✖ (.+?)( Rejected promise returned by test)?$');
        if ([' Timed out while running tests'].includes(help)) {
            return;
        }
        return sendInflux(conn, 'testcase', {
            title,
            run: startTime,
        }, {
            result: -1,
        });
    } else if (line.includes(' ◌ ')) {
        const [, title] = line.match(' ◌ (.+?)$');
        return sendInflux(conn, 'testcase', {
            title,
            run: startTime,
        }, {
            result: 0,
        });
    }
    console.log(`Failed to match line: ${line}`);
};

const runProcess = async (cmd, env = {}, options = {}) => new Promise((resolve, reject) => {
    const timeout = options.timeout || 60 * 30;
    const influxConn = options.influxConn;
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
        if (influxConn) {
            return parseMetric(influxConn, `${data}`).then(() => {
                console.log('Delivered metrics to influxDB');
            }).catch(err => {
                console.log(err);
            });
        }
    });

    proc.stderr.on('data', (data) => {
        process.stderr.write(data);
        output += data;
    });
});
const runIsolated = async (config, cmd, options = {}) => {
    const project = options.project || config.HYPERONE_PROJECT_MASTER;
    const config_dir = `/tmp/${Math.random()}/`;
    await mkDir(config_dir);
    const envIsolate = { HYPERONE_CONFIG_PATH: config_dir };
    await runProcess(`h1 login --username ${config.HYPERONE_USER} --password ${config.HYPERONE_PASSWORD}`, envIsolate);
    await runProcess(`h1 project select --project ${project}`, envIsolate);
    return runProcess(cmd, envIsolate, {
        timeout: config.MONITORING_TIMEOUT,
        influxConn: options.influxConn,
    });
};

const main = async () => {
    const config = getConfig();
    const versionText = `NodeJS version: ${process.version}`;

    const files = await fg(config.MONITORING_GLOB);

    const influxConn = {
        address: config.INFLUXDB_ADDRESS,
        username: config.INFLUXDB_USERNAME,
        password: config.INFLUXDB_PASSWORD,
        database: config.INFLUXDB_DATABASE,
    };

    let all_pass = true;
    const runTest = async test_path => {
        let output = `== ${test_path} ==\n`;
        try {
            output += await runIsolated(config, `${config.MONITORING_CMD} ${test_path}`, { influxConn });
        } catch (err) {
            all_pass = false;
            output += `${err.message}\n${err.output}\n${err.message}\n`;
        }
        return output;
    };

    const outputs = await Promise.all(files.map(runTest));
    const cleanup = [
        runIsolated(config, `./scripts/cleanup_project.sh ${config.HYPERONE_PROJECT_MASTER}`),
        runIsolated(config, `./scripts/cleanup_project.sh ${config.HYPERONE_PROJECT_SLAVE}`),
        runIsolated(config, `./scripts/revoke_user.sh ${tests.RECIPIENT.user} ${config.HYPERONE_PROJECT_MASTER}`),
        runIsolated(config, `./scripts/revoke_user.sh ${tests.RECIPIENT.user} ${config.HYPERONE_PROJECT_SLAVE}`),
    ];
    outputs.push(
        ...await Promise.all(cleanup.map(p => p.catch(err => err.output)))
    );
    await sendMail(config, all_pass, `${versionText}\n${outputs.join('\n')}`);
};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
