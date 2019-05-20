'use strict';

const {sha512crypt} = require('sha512crypt-node');
const crypto = require('crypto');

const hash = {
    sha512: (value) => {
        const salt = crypto.randomBytes(8);
        const hash = crypto
            .createHash('sha512')
            .update(salt)
            .update(value)
            .digest();
        return {
            type: 'sha512',
            value: `${salt.toString('base64')} ${hash.toString('base64')}`,
        };
    },
    'double-sha1': (value) => {
        const hash = crypto
            .createHash('sha1')
            .update(crypto
                .createHash('sha1')
                .update(value)
                .digest())
            .digest();
        return {
            type: 'double-sha1',
            value: hash.toString('hex').toUpperCase(),
        };
    },
};

const hashPassword = (value, credential_types) => {
    const method = Object.keys(hash)
        .find(x => credential_types.includes(x));
    if (!method) {
        throw new Error('Not supported password credentials.');
    }
    return hash[method](value);
};

const randomPassword = (size = 15) => new Promise((resolve, reject) =>
    crypto.randomBytes(size, function (err, buffer) {
        if (err) {
            reject(err);
        }
        resolve(buffer.toString('hex'));
    })
);

const unix = value => {
    const salt = Math.random().toString(36).slice(-8);

    return {
        type: 'unix',
        value: sha512crypt(value, salt),
    };
};

module.exports = {
    hashPassword,
    unix,
    randomPassword,
};
