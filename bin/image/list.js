'use strict';

const Cli = require('structured-cli');

const options = {
    recommended: {
        description: 'display recommended images',
        type: 'boolean'
    },
    all: {
        description: 'display all images',
        type: 'boolean'
    }
};

module.exports = Cli.createCommand('list', {
    description: 'Resource list',
    plugins: [
        require('../_plugins/loginRequired'),
        require('../_plugins/tenantRequired'),
        require('../_plugins/outputFormat'),
        require('../_plugins/api')
    ],
    options: options,
    handler: handleResourceList
});


function handleResourceList(args) {

    let query = '';
    query = args.recommended ? 'recommended' : query;
    query = args.all ? 'all' : query;

    if (args.recommended && args.output !== 'json') {
        args.query = args.query || '[].{id:_id,name:name,distro:description.distro,release:description.release,codename:description.codename,arch:description.arch,fileSize:ceil(fileSize),created:createdOn}';
    }

    return args.helpers.api.get(`image/${query}`)
    .then(result => args.helpers.sendOutput(args, result));
};
