import jmespath from 'jmespath';
// import tabula from 'tabula'
import yaml from 'js-yaml';

const queryFilter = (query, result) => {
    result = Array.isArray(result) ? result : [result];
    if (query) {
        result = jmespath.search(result, query);
    }
    return result;
};

const outputFormat = {
    // table: (result, query, defaultQuery) => {
    //     result = queryFilter(query || defaultQuery, result);
    //     return tabula.format(result);
    // },
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
    list: (result, query, defaultQuery) => {
        result = queryFilter(query || defaultQuery, result);
        const maxKeyLength = result[0] ? Math.max(...Object.keys(result[0]).map(i => i.length)) : 0;
        return result
            .map(item => Object
                .entries(item)
                .map(([i, value]) => `${i}${' '.repeat(maxKeyLength - i.length)} : ${value}`)
                .concat('')
                .join('\n')
            ).join('\n');
    },
    json: (result) => JSON.stringify(result, null, 4),
    js: (result, query) => query ? queryFilter(query, result) : result,
    id: (result, query) => queryFilter(query, result).map(x => x.id).join('\n'),
    uri: (result, query) => queryFilter(query, result).map(x => x.uri).join('\n'),
    yaml: (result, query) => yaml.safeDump(query ? queryFilter(query, result) : result),
};

export default {
    name: 'formatOutput',
    beforeParseArgv: (cmd) => {
        if (cmd.findCommand) {
            return;
        }
        cmd.options.push(...[
            {
                name: 'output',
                alias: 'o',
                description: 'Specify output format of command',
                type: String,
                typeLabel: `${Object.keys(outputFormat).join(',')}`,
                defaultValue: 'yaml',
                group: ['global'],
            },
            {
                name: 'query',
                description: 'JMESPath query string',
                type: String,
                defaultValue: cmd.defaultQuery,
                group: ['global'],
            },
        ]);
    },
    beforeCommandStart: async (opts) => {
        const optsAll = opts._all || opts;
        const formatter = outputFormat[optsAll.output];
        opts.format = (output) => {
            if (output && output.headers && output.status) {
                if (output.bodyText) {
                    output = output.bodyText;
                } else if (output.bodyJson) {
                    output = output.bodyJson;
                } else if (output.status <= 200 && output.status > 300) {
                    output = 'The operation was a success';
                } else {
                    output = `The operation response status is '${output.status} ${output.statusText}'`;
                }
            }
            if (typeof output === 'string') {
                return output;
            }
            return formatter(output, optsAll.query);
        };
    },
};
