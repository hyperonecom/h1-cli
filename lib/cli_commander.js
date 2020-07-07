'use strict';
const { Command } = require('commander');

const timingPromise = async (title, p) => {
    const start = new Date();
    const result = await p;
    const end = new Date();
    const duration = (end - start) / 1000;
    console.error(`${title}: ${duration} seconds`);
    return result;
};

const createCommand = (options) => {
    options.handler = options.handler || (() => {
        throw new Error('Not implemented');
    });
    options.plugins = options.plugins || [];
    options.parameters = options.parameters || {};

    const cmd = new Command(options.name).storeOptionsAsProperties(false);
    if (options.description) {
        cmd.description(options.description);
    }

    for (const plugin of options.plugins.filter(x => x.beforeParameter)) {
        plugin.beforeParameter(options);
    }

    for (const plugin of options.plugins.filter(x => x.parameters)) {
        Object.assign(options.parameters, plugin.parameters);
    }

    for (const [name, config] of Object.entries(options.parameters)) {
        const flag = config.type == 'boolean' ? `--${name}` :`--${name} [${(config.placeholder || name).toUpperCase()}]`;
        cmd._optionEx(
            { mandatory: config.required || false },
            flag,
            config.description,
            config.validator,
            config.defaultValue
        );
    }

    const toolbox = {};

    const wrapper = () => {
        console.error('inwrapper', cmd.opts(), options.plugins);
        const ctx = { input: cmd.opts(), options, toolbox };
        let p = Promise.resolve(ctx);

        for (const plugin of options.plugins.filter(x => x.beforeHandler)) {
            p = p.then(() =>
                Promise.resolve(timingPromise(`${plugin.name}:beforeHandler`, plugin.beforeHandler(ctx)))
            );
        }

        p = p.then(() => timingPromise('handler', Promise.resolve(options.handler(ctx))));

        for (const plugin of options.plugins.filter(x => x.afterHandler)) {
            p = p.then(output => {
                return timingPromise(`${plugin.name}:afterHandler`, Promise.resolve(plugin.afterHandler(ctx, output)));
            });
        }

        for (const plugin of options.plugins.filter(x => x.error)) {
            p = p.catch(err =>
                timingPromise(`${plugin.name}:error`, Promise.resolve(plugin.error(ctx, err)))
            );
        }
        return p;
    };
    cmd.action(wrapper);

    return cmd;
};

module.exports = {
    createCommand,
};
