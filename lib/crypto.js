'use strict';

const crypto = require('crypto');

const randomPassword = (size = 15) => new Promise((resolve, reject) =>
    crypto.randomBytes(size, function (err, buffer) {
        if (err) {
            return reject(err);
        }
        return resolve(buffer.toString('hex'));
    })
);

module.exports = {
    randomPassword,
};
