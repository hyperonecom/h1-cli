'use strict';

const fs = require('lib/fs');

const {sha512crypt} = require('sha512crypt-node');
const crypto = require('crypto');
const sha1 = data => crypto.createHash('sha1').update(data).digest();

const password_types = {
    sha512: {
        hash: (value) => {
            const salt = crypto.randomBytes(8);
            const hash = crypto
                .createHash('sha512')
                .update(salt)
                .update(value)
                .digest();
            return `${salt.toString('base64')} ${hash.toString('base64')}`;
        },
    },
    plain: {
        hash: (text) => text,
    },
    mysql: {
        hash: (text) => sha1(sha1(text)).toString('hex').toUpperCase(),
    },
    unix: {
        hash: (value) => {
            const salt = Math.random().toString(36).slice(-8);
            return sha512crypt(value, salt);
        },
    },
};

const types = {
    certificate: ['ssh'],
    password: Object.keys(password_types),
};

const hashPassword = (value, credential_types) => {
    const method = Object.keys(password_types)
        .find(x => credential_types.includes(x));
    if (!method) {
        throw new Error('Not found supported password credentials. Upgrade CLI, please.');
    }
    return {
        type: method,
        value: password_types[method].hash(value),
    };
};

const getCredentialCreate = async (args, credential_types) => {
    const credential = {};

    if (args.password) {
        credential.password = args.password.map(x =>
            Object.assign(hashPassword(x, credential_types), {
                name: 'initial-cli',
            })
        );
    }

    if (args.ssh || args['ssh-file']) {
        const p = args['ssh-file'].map(async file => {
            const content = await fs.getFileContent(file);
            return {
                name: file,
                type: 'ssh',
                value: content.toString('utf-8'),
            };
        });
        credential.certificate = [
            ...args.ssh.map(x => ({
                name: x,
                type: 'ssh',
                value: x,
            })),
            ...await Promise.all(p),
        ];
    }
    return credential;
};



module.exports = {
    getCredentialCreate,
    hashPassword,
    password_types,
    types,
};
