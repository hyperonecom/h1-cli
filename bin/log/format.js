'use strict';

const default_fields = ['facility', 'level', 'ts', 'host', 'appName', 'pid', 'messageid', 'message'];
const filters = require('./filters');

const csv_encode = values => values.map(value => {
    if (typeof value !== 'string') {
        return value.toString();
    }
    if (/[\r\n,"]/.test(value)) {
        return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
}).join(',');

const outputFormat = {
    json: {
        header: () => {
        },
        row: (fields, row) => row,
    },
    tsv: {
        header: () => {
        },
        row: (fields, row) => {
            const values = fields.map(field => row[field]);
            return values.map(value => {
                if (typeof value === 'number' || typeof value === 'boolean') {
                    return value;
                }
                if (typeof value === 'string') {
                    return value.match(/\t/) ? `"${value}"` : value;
                }
                return '-';
            }).join('\t');

        },
    },
    csv: {
        header: (fields) => console.log(csv_encode(fields)),
        row: (fields, row) => console.log(csv_encode(fields.map(field => row[field]))),
    },
};

const outputOptions = {
    output: {
        alias: 'o',
        description: 'Output format',
        choices: Object.keys(outputFormat),
        defaultValue: Object.keys(outputFormat)[0],
    },
    fields: {
        type: (val) => val.split(','),
        description: 'Fields displayed. Not apply to "jsonl" output.',
        defaultValue: default_fields.join(','),
    },
    filter: {
        description: 'Filter of logs',
        type: 'string',
        action: 'append',
        defaultValue: [],
    },
};

const formatter = options => {
    options.output = options.output || outputOptions.output.defaultValue;
    options.filters = options.filters || [];
    options.fields = options.fields || default_fields;

    return {
        print_header: () => {
            const header = outputFormat[options.output].header(options.fields);

            if (header) {
                console.log(header);
            }
        },
        print_jsonl: (jsonl) => {
            if (filters.matches(options.filters, jsonl)) {
                console.log(outputFormat[options.output].row(options.fields, jsonl));
            }
        },
    };
};


module.exports = {
    outputOptions,
    formatter,
};
