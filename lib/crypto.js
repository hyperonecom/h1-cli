'use strict';

const crypto = require('crypto');

const randomPassword = (size = 15) => new Promise((resolve, reject) =>
    crypto.randomBytes(size, function (err, buffer) {
        if (err) {
            reject(err);
        }
        resolve(buffer.toString('hex'));
    })
);

module.exports = {
    randomPassword,
};
