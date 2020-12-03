'use strict';
const ava = require('ava');
const {Client} = require('pg');

require('../../scope/h1');
const tests = require('../../lib/tests');
const mysql = require('mysql2/promise');

const mysqlQuery = async (database, password, query) => {
    console.log(new Date(), `Execute query '${query}' on database '${database.fqdn}'`);
    const connection = await mysql.createConnection({
        host: database.fqdn,
        user: database.username || database.id,
        password: password,
        database: database.id,
    });
    try {
        const [results, fields] = await connection.execute(query);
        return {results, fields};
    } finally {
        await connection.end();
    }
};

const mysql56Query = async (database, password, query) => mysqlQuery({...database, username: database.id.substr(-16)}, password, query);

const pgQuery = async (database, password, query) => {
    console.log(new Date(), `Execute query '${query}' on database '${database.fqdn}'`);
    const client = new Client({
        user: database.id,
        password: password,
        database: database.id,
        host: database.fqdn,
    });
    await client.connect();
    try {
        const {rows: results, fields} = await client.query(query);
        return {results, fields};
    } finally {
        await client.end();
    }
};

const query = {
    'postgres:11': pgQuery,
    'postgres:12': pgQuery,
    'postgres:13': pgQuery,
    'mysql:5.7': mysqlQuery,
    'mysql:5.6': mysql56Query,
};

Object.keys(query).forEach(flavour => {
    ava.serial(`database life cycle - ${flavour}`, tests.resourceLifeCycle('database', {
        createParams: `--name ${tests.getName('database-life-cycle')} --type ${flavour} `,
        stateCreated: 'Running',
    }));

    ava.serial(`database stop & start - ${flavour}`, async t => {
        const password = await tests.getToken();
        const database = await tests.run(`database create --name ${tests.getName(t.title)} --type ${flavour}`);
        await tests.run(`database credential password add --name ${tests.getName(t.title)} --database ${database.id}  --password ${password}`);
        await query[flavour](database, password, 'SELECT 1');
        await tests.run(`database stop --database ${database.id}`);
        await t.throwsAsync(() => query[flavour](database, password, 'SELECT 1'));
        const stopped_database = await tests.run(`database show --database ${database.id}`);
        t.true(stopped_database.state === 'Off');
        await tests.run(`database start --database ${database.id}`);
        await query[flavour](database, password, 'SELECT 1');
        const started_database = await tests.run(`database show --database ${database.id}`);
        t.true(started_database.state === 'Running');
        await tests.remove('database', database);
    });
});

Object.keys(query).filter(x => x.startsWith('mysql:')).forEach(flavour => {
    ava.serial(`database credentials password life cycle - ${flavour}`, async t => {
        const database = await tests.run(`database create --name ${tests.getName(t.title)} --type ${flavour}`);

        await tests.passwordLifeCycle(t, 'database', database);

        await tests.remove('database', database);
    });
    ava.serial(`database reachable - ${flavour}`, async t => {
        const password = await tests.getToken();
        const database = await tests.run(`database create --name ${tests.getName(t.title)} --type ${flavour}`);
        await tests.run(`database credential password add --name ${tests.getName(t.title)} --database ${database.id}  --password ${password}`);

        try {
            const {results, fields} = await query[flavour](database, password, 'SELECT NOW()');
            t.true(!!results);
            t.true(!!fields);

            const {results: results_self_ssl, fields: fields_self_ssl} = await query[flavour](database, password, 'SELECT NOW()', {
                ssl: {rejectUnauthorized: false},
            });
            t.true(!!results_self_ssl);
            t.true(!!fields_self_ssl);

            const {results: results_ssl, fields: fields_ssl} = await query[flavour](database, password, 'SELECT NOW()', {
                ssl: {},
            });
            t.true(!!results_ssl);
            t.true(!!fields_ssl);
        } finally {
            await tests.remove('database', database);
        }
    });
});

Object.keys(query).filter(x => x.startsWith('postgres:')).forEach(flavour => {
    ava.serial(`database reachable - ${flavour}`, async t => {
        const password = await tests.getToken();
        const database = await tests.run(`database create --name ${tests.getName(t.title)} --type ${flavour}`);
        await tests.run(`database credential password add --name ${tests.getName(t.title)} --database ${database.id}  --password ${password}`);
        try {
            const {results, fields} = await query[flavour](database, password, 'SELECT NOW()');
            t.true(!!results);
            t.true(!!fields);
        } finally {
            await tests.remove('database', database);
        }
    });
});
