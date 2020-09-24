import $RefParser from '@apidevtools/json-schema-ref-parser';
import fetch from 'node-fetch';

export const lazy_resolver = (baseUrl, options = {}) => ({
    order: 1,
    canRead: options.canRead || new RegExp('^[^#]'),
    // TODO: Support extensions parameter
    read({ url /*, extensions */ }, callback) {
        return callback(null, async () => {
            const path = new URL(url, baseUrl).toString();
            const resp = await fetch(path);
            const schema = await resp.json();
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

