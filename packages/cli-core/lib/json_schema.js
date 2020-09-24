import $RefParser from '@apidevtools/json-schema-ref-parser';

export const lazy_resolver = (baseUrl, options = {}) => ({
    order: 1,
    canRead: options.canRead || new RegExp('^[^#]'),
    // TODO: Support extensions parameter
    read({ url/*, extensions */ }, callback) {
        return callback(null, async () => {
            // json-schema-ref-parser is opinionated regarding environemnt
            // See https://github.com/APIDevTools/json-schema-ref-parser/blob/5674d1941042602d81165dbbd46879071d4af9ba/lib/index.js#L103
            // https://github.com/APIDevTools/json-schema-ref-parser/blob/5674d1941042602d81165dbbd46879071d4af9ba/lib/util/url.js#L33
            if (url.startsWith(process.cwd())) {
                url = url.replace(process.cwd(), '.');
            }
            url = new URL(url, baseUrl).toString();
            const schema = await $RefParser.parse(url);
            return $RefParser.dereference(schema, {
                resolve: {
                    lazy: lazy_resolver(baseUrl, options),
                    file: false,
                    http: false,
                },
            });
        });
    },
});

