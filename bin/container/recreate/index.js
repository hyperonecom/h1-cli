'use strict';

const Cli = require('lib/cli');
const registry = require('../registry');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
        },
        image: {
            description: 'Container image eg. h1cr.io/website/php-apache',
            type: 'string',
            required: false,
        },
    };

    return Cli.createCommand('recreate', {
        description: `Recreate ${resource.title}`,
        plugins: resource.plugins,
        priority: 25,
        options: Object.assign({}, options, resource.options, registry.options),
        dirname: __dirname,
        handler: async args => {
            let old_container;
            try {
                old_container = await args.helpers.api.get(
                    `${resource.url(args)}/${args[resource.name]}`);
            } catch (err) {
                if (err.status === 404) {
                    console.error(`Not found container '${args[resource.name]}'. Create container first.`);
                }
                throw err;
            }
            try {
                const partial = await args.helpers.api.get(
                    `${resource.url(args)}/${args[resource.name]}-new`
                );
                console.error('Detected partial-recreated container.');
                console.error(`Deleting '${partial.name}' (ID: ${partial.id}`);
                await args.helpers.api.delete(
                    `${resource.url(args)}/${args[resource.name]}-new`
                );
            } catch (err) {
                if (err.status !== 404) {
                    throw err;
                }
            }

            const new_container = await args.helpers.api.post(resource.url(args), {
                registry: await registry.parseArgs(args),
                name: `${old_container.name}-new`,
                image: args.image || old_container.image,
                expose: old_container.expose || [],
                env: old_container.env || [],
                tag: old_container.tag || {},
                command: old_container.command,
                service: old_container.services.find(service => service.type === 'flavour').sourceService,
            });

            console.log(`Created new container '${new_container.name}' (ID: ${new_container.id}`);

            const rename = (old_name, new_name) => args.helpers.api.patch(
                `${resource.url(args)}/${old_name}`,
                {name: new_name}
            );

            await rename(old_container.name, `${old_container.name}-old`);
            console.log(`Renamed container as '${old_container.name}-old' (ID: ${new_container.id}`);
            await rename(new_container.name, old_container.name);
            console.log(`Renamed container as '${old_container.name}' (ID: ${old_container.id}`);
            await args.helpers.api.delete(`${resource.url(args)}/${old_container.name}-old`);
            console.log(`Delete old container (ID: ${new_container.id} `);
        },
    });
};
