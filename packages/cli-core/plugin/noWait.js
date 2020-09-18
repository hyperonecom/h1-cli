
export default {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => cmd.options.push(
        {
            name: 'no-wait',
            type: (value) => value == 'true',
            typeLabel: 'true,false',
            choices: ['true', 'false'],
            defaultValue: true,
            description: 'In case of queued event do not wait for completion',
            group: ['global'],
        }
    ),
    beforeCommandStart: async (opts) => {
        const optsAll = opts._all || opts;
        const prefer_async = optsAll['no-wait'];
        const prefer_value = prefer_async ? `respond-async,wait=${60 * 60 * 24}` : 'respond-async,wait=0';
        opts.api.setHeaders({
            Prefer: prefer_value,
        });
    },
};
