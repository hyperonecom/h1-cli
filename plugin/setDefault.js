'use strict';

module.exports = {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => {
        if (!cmd.state) return;
        const { config } = cmd.state || {};
        for (const parameter of cmd.options) {
            if (!parameter.defaultSource) {
                continue;
            }
            const value = config.get(`parameter.${parameter.defaultSource}.value`);
            if (!value) {
                continue;
            }
            parameter.defaultValue = value;
            parameter.required = false;
        }
        config.store();
    },
};

