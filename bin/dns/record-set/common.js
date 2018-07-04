'use strict';

module.exports.recordOptions = {
    value: {
        description: 'Value',
        type: 'string',
        required: true,
        action: 'append',
        dest: 'values',
    },
};
