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
    table: (query, result) => {
        result = queryFilter(query, result);
        return tabula.format(result);
    },
    tsv: (query, result) => {
        result = queryFilter(query, result);
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
    list: (query, result) => {
        result = queryFilter(query, result);
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
    json: (query, result) => JSON.stringify(result, null, 4),
    js: (query, result) => query ? queryFilter(query, result) : result,
    id: (query, result) => queryFilter(query, result).map(x => x.id).join('\n'),
    uri: (query, result) => queryFilter(query, result).map(x => x.uri).join('\n'),
    yaml: (query, result) => yaml.safeDump(query ? queryFilter(query, result) : result),
};

module.exports = {
    name: 'format',
    // parameters: [
    //     output: {
    //         description: 'Specify output format of command',
    //         type: 'string',
    //         defaultValue: 'table',
    //         choices: Object.keys(outputFormat),
    //     },
    //     query: {
    //         description: ' JMESPath query string',
    //         type: 'string',
    //     },
    // ],
    beforeCommandStart: async (opts) => {
        const format = opts.output ;
        const query = '[].{id:id}';

        console.log(outputFormat[format](query, output));
    },
};
