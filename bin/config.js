'use strict';

const Cli = require('structured-cli');
const config = require('lib/config');

const category = Cli.createCategory('config', {
    description: 'Manage config of CLI'
});

category.addChild(Cli.createCommand('show', {
    description: 'Show config'
  , handler: () => {
        const defaults = config.get('defaults');
        console.log(JSON.stringify(defaults || {}, null, 2));
    }
}));

category.addChild(Cli.createCommand('get', {
    description: 'Get config value'
  , options: {
        key: {
            description: 'Name of config key'
          , type: 'string'
          , required: true
        }
    }
  , handler: args => {
        const defaults = config.get(`defaults.${args.key}`);
        console.log(defaults || 'key not set');
    }
}));

const getApp = args =>{
    let elem = args.$node;

    while (elem.parent) {
        elem = elem.parent;
    }

    return elem;
};

const getAppCommand = (args, path) => {
    let elem = getApp(args);

    path.split('.').forEach(part => {
        elem = elem && elem.children.find(c => c.name === part);
    });

    return elem;
};

category.addChild(Cli.createCommand('set', {
    description: 'Set config value'
  , options: {
        key: {
            description: 'Name of config key'
          , type: 'string'
          , required: true
        }
      , value: {
            description: 'Config value'
          , type: 'string'
          , required: true
        }
    }
  , handler: args => {

        const parts = args.key.split('.');
        const option = parts.pop();

        const cmd = getAppCommand(args, parts.join('.'));

        if (!cmd || option in cmd.options === false) {
            return console.log('key not found');
        }
        if (cmd.options[option].action === 'append') {
            args.value = args.value.split(',');
        }

        config.set(`defaults.${args.key}`, args.value);
    }
}));

category.addChild(Cli.createCommand('unset', {
    description: 'Unset config key'
  , options: {
        key: {
            description: 'Name of config key'
          , type: 'string'
          , required: true
        }
    }
  , handler: args => {
        config.unset(`defaults.${args.key}`);
  }
}));

module.exports = category;
