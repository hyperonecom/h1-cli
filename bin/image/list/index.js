'use strict';

const Cli = require('lib/cli');

const options = {
    recommended: {
        description: 'Display recommended images',
        type: 'boolean',
    },
    all: {
        description: 'Display all images',
        type: 'boolean',
    },
};

module.exports = resource => Cli.createCommand('list', {
    description: `List ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: args => {
        let path = '';
        if (args.recommended) {
            path = '/recommended';
        } else  if (args.all) {
            path = '/all';
        }

        return args.helpers.api
            .get(`${resource.url()}${path}`)
            .then(images => {

                if (args.recommended && args.output !== 'json') {
                    args.query = args.query || '[].{id:id,name:name,distro:description.distro,release:description.release,codename:description.codename,edition:description.edition,arch:description.arch,fileSize:ceil(fileSize),created:createdOn}';
                    images.forEach(image => {
                        image.description = JSON.parse(image.description);
                    });
                }

                return args.helpers.sendOutput(args, images);
            });
    },
});
