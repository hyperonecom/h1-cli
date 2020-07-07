'use strict';

module.exports = {
    name: __dirname.split('/').pop(),
    beforeHandler: async (ctx) => {
        for (const [name, parameter] of Object.entries(ctx.options.parameters)) {
            if (!parameter.choices) {
                continue;
            }
            if (ctx.input[name] && !parameter.choices.includes(ctx.input[name])) {
                throw new Error(`Invalid choice for parameter '--${name}': ${ctx.input[name]} (choose from ${JSON.stringify(parameter.choices)}`);
            }
        }
    },
};
