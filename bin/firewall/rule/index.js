'use strict';

const Cli = require('lib/cli');

module.exports = (table, parent) => {

    const resource = {
        name: table,
        // eslint-disable-next-line quotes
        defaultQuery: `[].{id:_id, name:name, priority:priority, action: action, filter:join(',',filter), external:join(',',external), internal:join(',',internal)}`,
        plugins: parent.plugins,
        options: {
            firewall: {
                description: 'Firewall ID or name',
                type: 'string',
                required: true,
            },
        },
        title: `rule ${table} of ${parent.title}`,
    };

    const category = Cli.createCategory(table, Object.assign({}, resource, {
        description: `Manage ${table} rules of ${parent.title}`,
        dirname: __dirname,
    }));

    category.addChild(require('./list')(table, resource));
    category.addChild(require('./add')(table, resource));
    category.addChild(require('./delete')(table, resource));

    return category;
};
