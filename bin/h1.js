#!/usr/bin/env node
'use strict';

const cli = require('./index');
const logger = require('lib/logger');

const matches = (prop, value, callback) => err => {
    if (err[prop] === value) {
        return callback(err);
    }
    throw err;
};

cli.run()
    .then(result => {
        if (result) {
            if (typeof result === 'object') {
                console.dir(result, {depth: null});
            } else {
                console.log(result);
            }
        }
    })
    // Code: 1
    .catch(matches('code', 'E_CANCELLED', err => {
        logger('error', err.message);

        process.exit(1);
    }))
    // Code: 5
    .catch(matches('code', 'E_NOTFOUND', err => {
        logger('error', err.message);

        process.exit(5);
    }))
    // Code: 7
    .catch(matches('code', 'E_SERVERERROR', err => {
        logger('error', err.message);

        process.exit(7);
    }))
    // Code: 99
    .catch(err => {
        if (err.response) {
            logger('error', `${err.status} ${err.response.error.text}`);
            if (err.response.body.message) {
                logger('error', `${err.response.body.message}`);
            }
            if (err.response.body.error) {
                Object.entries(err.response.body.error).forEach(([item, value]) =>
                    console.log(`\t${item}: ${value.message}`)
                );
            }
            process.exit(1);
        }

        if (typeof err === 'string') {
            logger('error', err);
            process.exit(1);
        }

        logger('error', `Uncaught error: ${err.message}`);
        logger('error', err.stack);

        process.exit(99);
    })
    .then(() => process.exit(0))
;
