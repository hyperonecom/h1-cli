'use strict';
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

module.exports = {
    hashPassword,
};
