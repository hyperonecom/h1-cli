'use strict';

module.exports.options = {
    type: {
        description: 'type'
        , type: 'string'
        , defaultValue: 'totp'
        , choices: ['totp', 'otac']
    }
};
