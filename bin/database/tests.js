'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const mysql = require('mysql2');

const commonCreateParams = '--type mysql';

const mysqlQuery = async (database, password, query) => {
    const connection = mysql.createConnection({
        host: database.fqdn,
        user: database._id,
        password: password,
        database: database._id,
        authSwitchHandler: function ({pluginName}, cb) {
            if (pluginName === 'mysql_clear_password') {
                return cb(null, Buffer.from(password));
            }
            return cb(new Error(`Unknown AuthSwitchRequest plugin name ${pluginName}`));

        },
    });
    console.log(new Date(), `Execute query '${query}' on database'${database.fqdn}'`);

    await new Promise((resolve, reject) =>
        connection.connect((err) => {
            if (err) return reject(err);
            return resolve();
        })
    );
    try {
        return await new Promise((resolve, reject) =>
            connection.query(query, function (err, results, fields) {
                if (err) return reject(err);
                return resolve({results, fields});
            })
        );
    } finally {
        await new Promise((resolve, reject) =>
            connection.end((err) => {
                if (err) return reject(err);
                return resolve();
            })
        );
    }
};

ava.serial('database life cycle', tests.resourceLifeCycle('database', {
    createParams: `--name ${tests.getName('database-life-cycle')} ${commonCreateParams} `,
    stateCreated: 'Running',
}));


ava.serial('database reachable', async t => {
    const password = await tests.getToken();
    const database = await tests.run(`database create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    try {
        const {results, fields} = await mysqlQuery(database, password, 'SELECT NOW()');
        t.true(!!results);
        t.true(!!fields);
    } finally {
        await tests.remove('database', database);
    }
});

ava.serial('database credentials password life cycle', async t => {
    const database = await tests.run(`database create --name ${tests.getName(t.title)} ${commonCreateParams}`);

    await tests.passwordLifeCycle(t, 'database', database);

    await tests.remove('database', database);
});

ava.serial('database stop & start', async t => {
    const password = await tests.getToken();
    const database = await tests.run(`database create --name ${tests.getName(t.title)} ${commonCreateParams} --password ${password}`);
    await mysqlQuery(database, password, 'SELECT 1');
    await tests.run(`database stop --database ${database._id}`);
    await t.throwsAsync(() => mysqlQuery(database, password, 'SELECT 1'));
    const stopped_database = await tests.run(`database show --database ${database._id}`);
    t.true(stopped_database.state === 'Off');
    await tests.run(`database start --database ${database._id}`);
    await mysqlQuery(database, password, 'SELECT 1');
    const started_database = await tests.run(`database show --database ${database._id}`);
    t.true(started_database.state === 'Running');
    await tests.remove('database', database);
});
