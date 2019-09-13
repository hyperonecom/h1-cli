'use strict';

const options = {
    ['registry-username']: {
        description: 'Username to access container registry',
        type: 'string',
        required: false,
    },
    ['registry-password']: {
        description: 'Username to access container registry',
        type: 'string',
        required: false,
    },
};

const parseArgs = async args => {
    return {
        username: args['registry-username'],
        password: args['registry-password'],
    };
};

module.exports = {
    parseArgs,
    options,
};
