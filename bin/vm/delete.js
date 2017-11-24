'use strict';

const genericDelete = require('bin/generic/delete');

const plugin = {
    onBeforeConfigure: context => {
        const node = context.node;

        node.addOption('disk', {
            description: 'disk to remove'
          , type: 'string'
          , action: 'append'
        });

    }
  , onBeforeHandler: context => {
        context.args.helpers = Object.assign(
            { body: { removeDisks: context.args.disk }}
          , context.args.helpers
        );
    }
};

module.exports = resource => {
    return genericDelete(Object.assign({}, resource, { plugins: [...resource.plugins, plugin ] }));
};
