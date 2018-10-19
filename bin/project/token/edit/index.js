'use strict';

const Cli = require('lib/cli');
const inquirer = require('inquirer');
const yaml = require('js-yaml');


module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${resource.title} ID`,
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('edit', {
        description: `Edit ${resource.title}`,
        resource: resource,
        dirname: __dirname,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            const url = `${resource.url(args)}/${args[resource.name]}`;
            const result = await args.helpers.api.get(url);

            const questions = {
                type: 'editor',
                name: 'input',
                message: 'Specify the name and access policy of the token.',
                default: yaml.safeDump({
                    name: result.name,
                    access: result.access.map(access => ({
                        method: access.method,
                        path: access.path,
                    })),
                }),
                validate: function (text) {
                    try {
                        yaml.safeLoad(text);
                    } catch (e) {
                        return `You can not change the data format (YAML). The data entered is not a valid YAML document.\n${e.message}`;
                    }
                    return true;
                },
            };

            const {input} = await inquirer.prompt(questions);
            const data = yaml.safeLoad(input);
            const requests = [];
            if ('name' in data && data.name !== result.name) {
                requests.push(args.helpers.api.patch(`${args.$node.parent.config.url(args)}/${args[resource.name]}`, {
                    name: data.name,
                }));
            }
            if ('access' in data) {
                // Add new access
                requests.push(...data.access
                    .filter(access => !result.access.find(acc => acc.path === access.path && acc.method === access.method))
                    .map(access => args.helpers.api.post(`${url}/access`, access)));
                // Remove missing access
                requests.push(...result.access
                    .filter(access => !data.access.find(acc => acc.path === access.path && acc.method === access.method))
                    .map(access => args.helpers.api.delete(`${url}/access/${access._id}`)));
            }
            for (const req in requests) {
                await req; // Perform asynchronously for now.
            }
            return args.helpers.api.get(url)
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
