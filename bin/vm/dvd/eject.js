'use strict';

const Cli = require('structured-cli');

const interactive = require('lib/interactive');

const params = {
    'id': {
        description: 'DVD drive identifier',
        type: 'string',
        required: true
    }
};


module.exports = function(resource) {
    return Cli.createCommand('eject', {
        description: 'Eject ISO from DVD drive',
        plugins: [
            ...resource.plugins,
            require('bin/_plugins/confirmYes')
        ],
        params: params,
        options: resource.options,
        handler: handleResourceEject(resource)
    });
};


function handleResourceEject() {

    return function(args) {

        const deleteApi = () => {
            const url = `${args.$node.parent.config.url(args)}/${args.id}/iso`;

            return args.helpers.api.delete(url)
                .then(result => args.helpers.sendOutput(args, result));
        };

        if (args.yes) {
            return deleteApi();
        }

            return interactive.confirm('Are you sure you want to eject ISO ?')
                .then(answer=>{
                    if (answer.value === true) {
                        return deleteApi();
                    }

                        throw Cli.error.cancelled('Canceled', undefined);

                });


    };

};
