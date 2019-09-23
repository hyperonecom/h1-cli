'use strict';

const Cli = require('lib/cli');

module.exports = resource => {
    const category = Cli.createCategory('notification', {
        description: 'Manage your notifications',
    });

    category.addChild(require('bin/generic/set-update')({ ...resource, url: args => `${resource.url(args)}/threshold/credits/levels`,
        title: 'credits limit',
        name: 'credits',
        update_name: 'limit',
        extra_parameter: {type: 'float'},
        context: {
            addParams: '--project my-project',
            listParams: '--project my-project',
            deleteParams: '--project my-project',
        }}));

    return category;
};
