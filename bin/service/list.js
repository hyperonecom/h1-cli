'use strict';

const Cli = require('structured-cli');

const options = {
    resource: {
        type: String
      , choices: [ 'disk', 'image', 'ip', 'iso', 'netadp', 'network', 'tenant', 'vault', 'vm']
    }
  , type: {
        type: String
      , choices: [ 'flavour', 'ipv4', 'license', 'metric', 'standard', 'support' ]
    }
};

const customOutput = {
    vm: {
        flavour: '[].{name: name, maxIPv4:data.vm.maxIPv4, maxhdd:data.vm.maxhdd, maxNetAdp:data.vm.maxNetAdp, cpu:data.vm.cpu, memory:data.vm.memory, PLN: billing.price.PLN, period: billing.period}'
    }
};

module.exports = resource => Cli.createCommand('list', {
    description: 'Resource List'
  , plugins: resource.plugins
  , options: options
  , handler: async args => {

        const query = {};
        if (args.resource) {
            query.resource = args.resource;
        }
        if (args.type) {
            query.type = args.type;
        }

        const services = await args.helpers.api.get(resource.url(args), query);

        if (args.resource && args.type) {
            if (customOutput[args.resource] && customOutput[args.resource][args.type]) {
                args.query = customOutput[args.resource][args.type];
            }
        }

        return args.helpers.sendOutput(args, services);
    }
});
