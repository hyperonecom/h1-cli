'use strict';

module.exports = {
    onBeforeHandler: context => {
        let p = Promise.resolve();

        Object
            .keys(context.args)
            .filter(arg => /^[^\$]/.test(arg))
            .filter(arg => context.args[arg] && !!context.args[arg].interactive)
            .forEach(arg => {
                p = p
                    .then(() => context.args[arg].interactive(context))
                    .then(prompt => context.args[arg] = prompt.value);
            });

        return p;
    },
};
