'use strict';

const Cli = require('structured-cli');

const interactive = require('lib/interactive');

module.exports = resource => Cli.createCommand('eject', {
    description: 'Eject ISO from DVD drive'
  , plugins: [
        ...resource.plugins
      , require('bin/_plugins/confirmYes')
    ]
  , params: resource.params
  , options: resource.options
  , handler: args => {
        const eject = () => args.helpers.api
            .put(args.$node.parent.config.url(args), { })
            .then(result => args.helpers.sendOutput(args, result));

        if (args.yes) {
            return eject();
        }

        return interactive
            .confirm('Are you sure you want to eject ISO ?')
            .then(answer=> {
                if (answer.value === true) {
                    return eject();
                }

                throw Cli.error.cancelled('Canceled', undefined);
            });
    }
});
