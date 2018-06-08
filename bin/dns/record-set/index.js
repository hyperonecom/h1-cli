'use strict';

const Cli = require('structured-cli');

const defaults = require('bin/generic/defaults');


const addTrailingDot = name => /\.$/.test(name) ? name : `${name}.`;
const formatRecordName = (name, zone) => {
    const re = new RegExp(`(\\.|${zone})$`);

    if (!re.test(name)) {
        name = `${name}.${zone}`;
    } else if (/^@$/.test(name)) {
        name = zone;
    }

    return name;
};

const recordOptions = {
    value: {
        description: 'Value'
      ,  type: 'string'
      , required: true
      , action: 'append'
      , dest: 'values'
    }
};

const resource = {
    name: 'record-set',
    // eslint-disable-next-line quotes
    defaultQuery: "[].rrsets[].{name:name, type:type, ttl:ttl, records:join(',',records[].content)}",
    url: args => `dns/zone/${args['zone-name']}`,
    options: {
        'zone-name': {
            description: 'DNS zone name',
            type: 'string',
            required: true
        }
    },
    title: 'Record set'
};

const recordTypes = ['a', 'cname', 'txt', 'mx', 'ns', 'srv'];

const category = function(resource) {

    const resourceDefaults = {
        url: () => resource.name
    };

    resource = Object.assign({}, defaults, resourceDefaults, resource);

    const category = Cli.createCategory(resource.name, {
        description: `Manage your ${resource.name}`,
        defaultQuery: resource.defaultQuery,
        url: resource.url
    });

    recordTypes.forEach(type => category.addChild(record(type, resource)));

    category.addChild(require('bin/generic/list')(resource));

    return category;
};

function record(type, resource) {
    const category = Cli.createCategory(type, {
        description: `Manage record set type ${type.toUpperCase()}`,
        defaultQuery: `[?type=='${type.toUpperCase()}'][].{name:name, type:type, ttl:ttl, records:join(',',records[].content)}`,
        url: args => `${resource.url(args)}/rrsets/${type.toUpperCase()}`
    });

    resource = Object.assign({}, resource, {
        title: `Record ${type.toUpperCase()}`
    });

    category.addChild(require('bin/generic/list')(resource));
    category.addChild(createRecordSet(resource));
    category.addChild(deleteRecordSet(resource));
    category.addChild(addRecord(resource));
    category.addChild(deleteRecord(resource));

    return category;
};

const handleCreate = args => {

    const url = args.$node.parent.config.url(args);

    args['zone-name'] = addTrailingDot(args['zone-name']);

    const data = {
        name: formatRecordName(args.name, args['zone-name'])
      , ttl: args.ttl
      , records: args.values.map(value => ({ content: value, disabled: false }))
    };

    return args.helpers.api
        .post(url, data)
        .then(result => args.helpers.sendOutput(args, result))
    ;
};

function createRecordSet(resource) {

    const options = {
        name: {
            description: 'Record Set name',
            type: 'string',
            required: true
        },
        ttl: {
            description: 'Record Set Time To Live (TTL)',
            type: 'int',
            defaultValue: 3600
        }
    };

    return Cli.createCommand('create', {
        description: 'Create record-set',
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options, recordOptions),
        handler: handleCreate
    });
};

const handleDelete = args => {
    args['zone-name'] = addTrailingDot(args['zone-name']);

    const name = formatRecordName(args.name, args['zone-name']);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    return args.helpers.api
        .delete(url)
        .then(result => args.helpers.sendOutput(args, result))
    ;
};

function deleteRecordSet(resource) {

    const options = {
        name: {
            description: 'Record Set name',
            type: 'string',
            required: true
        }
    };

    return Cli.createCommand('delete', {
        description: 'Delete record-set'
      , plugins: resource.plugins
      , options: Object.assign({}, options, resource.options)
      , handler: handleDelete
    });
}

const handleAddRecord = args => {

    args['zone-name'] = addTrailingDot(args['zone-name']);
    const name = formatRecordName(args.name, args['zone-name']);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    const new_records = args.values.map(value => ({ content: value, disabled: false }));

    return args.helpers.api
        .get(url)
        .then(rset => {
            rset.records.push(...new_records);

            return args.helpers.api
                .patch(url, rset)
                .then(result => args.helpers.sendOutput(args, result))
            ;
        });
};

function addRecord(resource) {

    const options = {
        name: {
            description: 'Record Set name',
            type: 'string',
            required: true
        }
    };

    return Cli.createCommand('add-record', {
        description: 'Add record',
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options, recordOptions),
        handler: handleAddRecord
    });
};

const handleDeleteRecord = args => {

    args['zone-name'] = addTrailingDot(args['zone-name']);
    const name = formatRecordName(args.name, args['zone-name']);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    return args.helpers.api
        .get(url)
        .then(rset => {
            rset.records = rset.records.filter(record => !args.values.includes(record.content));

            return args.helpers.api
                .patch(url, rset)
                .then(result => args.helpers.sendOutput(args, result))
            ;
        });
};

function deleteRecord(resource) {

    const options = {
        name: {
            description: 'Record Set name',
            type: 'string',
            required: true
        }
    };

    return Cli.createCommand('delete-record', {
        description: 'Delete record',
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options, recordOptions),
        handler: handleDeleteRecord
    });
};

module.exports = category(resource);
