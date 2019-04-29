'use strict';
const cryptography = require('lib/cryptography');
const fs = require('lib/fs');

const getCredentialCreate = async (args) => {
    const credential = {};

    if (args.password) {
        credential.password = args.password.map(x => Object.assign({
            name: 'initial-cli',
        },
        cryptography.hashPassword(x)
        ));
    }

    if (args.ssh) {
        credential.certificate = [
            ...args.ssh.map(x => ({
                name: x,
                type: 'ssh',
                value: x,
            })),
            ...await Promise.all(
                args['ssh-file'].map(async file => {
                    const content = await fs.getFileContent(file);
                    return {
                        name: file,
                        type: 'ssh',
                        value: content.toString('utf-8'),
                    };
                })
            ),
        ];
    }
    return credential;
};

module.exports = {
    getCredentialCreate,
};
