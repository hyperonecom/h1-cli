'use strict';
const jmespath = require('jmespath');
const tabula = require('tabula');
const yaml = require('js-yaml');

const queryFilter = (query, result) => {
    result = Array.isArray(result) ? result : [result];
    result = jmespath.search(result, query);
    return result;
};

const outputFormat = {
    table: (result, query, defaultQuery) => {
        result = queryFilter(query || defaultQuery, result);
        return tabula.format(result);
    },
    tsv: (result, query, defaultQuery) => {
        result = queryFilter(query || defaultQuery, result);
        return result.map(item =>
            Object.values(item).map(value => {
                if (typeof value === 'number' || typeof value === 'boolean') {
                    return value;
                }
                if (typeof value === 'string') {
                    return value.match(/\t/) ? `"${value}"` : value;
                }
                return '-';

            }).join('\t')
        ).join('\n');
    },
    list: (result, query) => {
        result = queryFilter(query || defaultQuery, result);
        const maxKeyLength = result[0] ? Math.max(...Object.keys(result[0]).map(i => i.length)) : 0;
        return result
            .map(item => Object
                .entries(item)
                .map(([i, value]) => `${i}${' '.repeat(maxKeyLength - i.length)} : ${value}`)
                .concat('')
                .join('\n')
            ).join('\n')
        ;
    },
    json: (result) => JSON.stringify(result, null, 4),
    js: (result, query) => query ? queryFilter(query, result) : result,
    id: (result, query) => queryFilter(query, result).map(x => x.id).join('\n'),
    uri: (result, query) => queryFilter(query, result).map(x => x.uri).join('\n'),
    yaml: (result, query) => yaml.safeDump(query ? queryFilter(query, result) : result),
};

module.exports = {
    name: __filename.split('/').pop(),
    beforeParseArgv: (cmd) => cmd.options.push(...[
        {
            name: 'output',
            alias: 'o',
            description: 'Specify output format of command',
            type: String,
            typeLabel: `${Object.keys(outputFormat).join(',')}`,
            defaultValue: 'table',
        },
        {
            name: 'query',
            description: 'JMESPath query string',
            type: String,
        },
    ]),
    beforeCommandStart: async (opts) => {
        const formatter = outputFormat[opts._all.output];
        opts.format = (opts, output) => formatter(output, opts._all.query, opts.defaultQuery);
    },
};
