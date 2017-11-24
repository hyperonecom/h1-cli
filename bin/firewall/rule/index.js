'use strict';

const Cli = require('structured-cli');

module.exports = (table, parent) => {

    const resource = {
        name: table
        // eslint-disable-next-line quotes
      , defaultQuery: `[].{id:_id, name:name, priority:priority, action: action, filter:join(',',filter), external:join(',',external), internal:join(',',internal)}`
      , plugins: parent.plugins
      , params: {
            id: {
                description: 'Resource identifier'
              , type: 'string'
              , required: true
            }
        }
    };

    const category = Cli.createCategory(table, resource);

    category.addChild(require('./list')(table, resource));
    category.addChild(require('./add')(table, resource));
    category.addChild(require('./remove')(table, resource));

    return category;
};
