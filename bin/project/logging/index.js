'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'logging',
        description: 'Manage your compliance logging',
        defaultQuery: '[]',
        url: args => `${parent.url(args)}/compliance`,
        params: parent.params,
        options: parent.options,
        plugins: parent.plugins,
        commands: [],
        title: 'compliance log',
        earlyAdoptersOnly: true,
        // dirname: __dirname,
    };

    const category = genericResource(resource);
    ['enable', 'disable', 'show'].forEach(cmd =>
        category.addChild(require(`./${cmd}`)(resource))
    );
    return category;
};

