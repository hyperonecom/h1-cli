
export default {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => cmd.options.push(
        {
            name: 'no-wait',
            type: Boolean,
            description: 'In case of queued event do not wait for completion',
            defaultValue: true,
            group: ['global'],
        }
    ),
    beforeCommandStart: async (opts) => {
        const optsAll = opts._all || opts;
        const prefer_async = optsAll.noWait;
        const prefer_value = prefer_async ? 'respond-async,wait=0' : `respond-async,wait=${60 * 60 * 24}`;
        opts.api.setHeaders({
            Prefer: prefer_value,
        });
    },
};
