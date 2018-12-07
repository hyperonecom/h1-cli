'use strict';

const Cli = require('lib/cli');
const inquirer = require('inquirer');
const yaml = require('js-yaml');


async function prompt_yaml_editor(options) {
    const data = await inquirer.prompt({
        type: 'editor',
        name: 'input',
        message: options.message,
        default: yaml.safeDump(options.defaultValue),
        validate: function (text) {
            let content;
            try {
                content = yaml.safeLoad(text);
            } catch (e) {
                return `You can not change the data format (YAML). The data entered is not a valid YAML document.\n${e.message}`;
            }
            return options.validator ? options.validator(content) : true;
        },
    });
    return yaml.safeLoad(data.input);
}

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
            const input = await prompt_yaml_editor({
                defaultValue: {
                    name: result.name,
                    access: result.access.map(access => ({
                        method: access.method,
                        path: access.path,
                    })),
                },
                message: 'Specify the name and access policy of the token.',
            });
            const requests = [];
            if ('name' in input && input.name !== result.name) {
                requests.push(args.helpers.api.patch(`${args.$node.parent.config.url(args)}/${args[resource.name]}`, {
                    name: input.name,
                }));
            }
            if ('access' in input) {
                // Add new access
                requests.push(...input.access
                    .filter(access => !result.access.find(acc => acc.path === access.path && acc.method === access.method))
                    .map(access => args.helpers.api.post(`${url}/access`, access)));
                // Remove missing access
                requests.push(...result.access
                    .filter(access => !input.access.find(acc => acc.path === access.path && acc.method === access.method))
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
