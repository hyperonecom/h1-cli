'use strict';

const Cli = require('lib/cli');

const options = {
    'zone-name': {
        description: 'DNS zone name',
        type: 'string',
        required: true,
    },
};

const handle = (args) => {
    const url = `${args.$node.parent.config.url(args)}/${args['zone-name']}`;

    return args.helpers.api.get(url, {
        name: args['zone-name'],
    }).then(result => {
        return result.rrsets.map(item => {
            return item.records.filter(r=>!r.disabled).map(r => {
                return [item.name, 'IN', item.ttl, item.type, r.content].join('\t');
            }).join('\n');
        }).join('\n');
    });
};

module.exports = (resource) => Cli.createCommand('export', {
    description: `Export ${resource.title}`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: handle,
});
