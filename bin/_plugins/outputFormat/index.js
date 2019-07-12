'use strict';

const jmespath = require('jmespath');
const tabula = require('tabula');
const yaml = require('js-yaml');
const {richOption} = require('lib/cli');

const queryFilter = (args, result) => {

    const config = args.$node.parent.config;
    const query = args.query || config.defaultQuery || '[].[_id]';
    result = Array.isArray(result) ? result : [result];
    result = jmespath.search(result, query);
    return result;
};

const outputFormat = {
    table: (args, result) => {
        result = queryFilter(args, result);
        return tabula.format(result);
    },
    tsv: (args, result) => {
        result = queryFilter(args, result);
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
    list: (args, result) => {
        result = queryFilter(args, result);
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
    json: (args, result) => args.query ? queryFilter(args, result) : result,
    id: (args, result) => queryFilter(args, result).map(x => x.id || x.id).join('\n'),
    yaml: (args, result) => yaml.safeDump(args.query ? queryFilter(args, result) : result),
};

const options = {
    output: richOption({
        alias: 'o',
        description: 'Specify output format of command',
        type: 'string',
        env: 'CLI_OUTPUT',
        defaultValue: 'table',
        choices: Object.keys(outputFormat),
        dest: 'output',
    }),
    query: {
        description: ' JMESPath query string',
        type: 'string',
    },
};

module.exports = {
    options: options,
    dirname: __dirname,
    onBeforeConfigure: context => context.node.addOptionGroup('Output options', options),
    onBeforeHandler: context => {
        context.args.helpers = context.args.helpers || {};
        context.args.helpers.sendOutput = (args, result) => outputFormat[args.output](args, result);
    },
};
