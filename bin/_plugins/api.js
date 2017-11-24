'use strict';

const api = require('lib/api');

module.exports = {
    onBeforeConfigure: context => {
        const node = context.node;

        node.addOption('verbose', {
            alias: 'v'
          , description: 'verbose'
          , defaultValue: !!process.env.H1_DEFAULT_VERBOSE
          , type: 'boolean'
        });

        // websocks depends on no-wait existing and being false
        node.addOption('no-wait', {
            description: 'in case of queued event do not wait for completion'
          , type: 'boolean'
        });

        node.addOption('dry-run', {
            description: 'dry run for the request'
          , type: 'boolean'
        });
    }
  , onBeforeHandler: context => {
        api.setVerbose(context.args.verbose);
        api.setArgs(context.args);

        context.args.helpers = context.args.helpers || {};
        context.args.helpers.api = api;
    }
};
