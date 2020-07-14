'use strict';

module.exports = {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => cmd.options.push({
        name: 'verbose',
        type: Boolean,
        description: 'Make the operation more talkative.',
        defaultValue: false,
        group: ['global'],
    }),
    beforeCommandStart: async (opts, cmd) => {
        const allOpts = opts._all || opts || {};
        opts.logger = {};
        opts.logger.info = (...args) => cmd.device.log(...args);
        opts.logger.debug = (...args) => allOpts.verbose && cmd.device.debug(...args);
    },
};
