'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const mysql = require('mysql2/promise');

const commonCreateParams = '--type mysql:5.7';

const mysqlQuery = async (database, password, query) => {
    console.log(new Date(), `Execute query '${query}' on database'${database.fqdn}'`);
    const connection = await mysql.createConnection({
        host: database.fqdn,
        user: database._id,
        password: password,
        database: database._id,
    });
    try {
        const [results, fields] = await connection.execute(query);
        return {results, fields};
    } finally {
        await connection.end();
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

        const {results: results_self_ssl, fields:fields_self_ssl} = await mysqlQuery(database, password, 'SELECT NOW()', {
            ssl: {rejectUnauthorized: false},
        });
        t.true(!!results_self_ssl);
        t.true(!!fields_self_ssl);

        const {results: results_ssl, fields:fields_ssl} = await mysqlQuery(database, password, 'SELECT NOW()', {
            ssl: {},
        });
        t.true(!!results_ssl);
        t.true(!!fields_ssl);
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
