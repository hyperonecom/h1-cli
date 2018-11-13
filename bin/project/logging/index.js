'use strict';

const genericResource = require('bin/generic');

module.exports = parent => {

    const resource = {
        name: 'logging',
        description: 'Manage your compilance logging',
        defaultQuery: '[]',
        url: args => `${parent.url(args)}/compliance`,
        params: parent.params,
        options: parent.options,
        commands: [],
        title: 'compilance log',
        earlyAdoptersOnly: true,
        // dirname: __dirname,
    };

    const category = genericResource(resource);
    ['enable', 'disable', 'show'].forEach(cmd =>
        category.addChild(require(`./${cmd}`)(resource))
    );
    return category;
};

