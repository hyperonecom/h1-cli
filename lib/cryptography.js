'use strict';

const { sha512crypt } = require('sha512crypt-node');
const crypto = require('crypto');

const hashPassword = (value) => {
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
};

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
};
