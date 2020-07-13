'use strict';

module.exports = {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => {
        for (const parameter of cmd.options) {
            if (!parameter.defaultSource) {
                continue;
            }
            const value = cmd.config.get(`parameter.${parameter.defaultSource}.value`);
            if (!value) {
                continue;
            }
            parameter.defaultValue = value;
            parameter.required = false;
        }
    },
};

