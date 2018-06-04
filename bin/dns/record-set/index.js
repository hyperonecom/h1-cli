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


const recordTypes = {
    a: {
        options: {
            'ipv4-address': {
                description: 'IPv4 address'
              , type: 'string'
              , required: true
              // , action: 'append'
              // , dest: 'records'
            }
        }
      , content: args => args['ipv4-address']
    }
  , cname: {
        options : {
            'cname': {
                description: 'CName'
              , type: 'string'
              , required: true
              // , action: 'append'
              // , dest: 'records'
            }
        }
      , content: args => addTrailingDot(args.cname)
    }
  , txt: {
        options : {
            'value': {
                description: 'TXT value'
              , type: 'string'
              , required: true
              // , action: 'append'
              // , dest: 'records'
            }
        }
      , content: args => args.value
    }
  , 'mx': {
        options : {
            exchange: {
                description: 'Exchange metric'
              , type: 'string'
              , required: true
            }
          , preference: {
                description: 'Preference metric'
              , type: 'int'
              , required: true
            }
        }
      , content: args => `${args.preference} ${addTrailingDot(args.exchange)}`
    }
  , ns: {
        options : {
            'nsdname': {
                description: 'Name server domain name'
              , type: 'string'
              , required: true
            }
        }
      , content: args => addTrailingDot(args.nsdname)
    }
  , srv: {
        options : {
            port: {
                description: 'Service port.'
              , type: 'string'
              , required: true
            }
          , priority: {
                description: 'Priority metric'
              , type: 'int'
              , required: true
            }
          , weight: {
                description: 'Weight metric'
              , type: 'int'
              , required: true
            }
          , target: {
                description: 'Target domain name'
              , type: 'string'
              , required: true
            }
        }
      , content: args => `${args.priority} ${args.weight} ${args.port} ${addTrailingDot(args.target)}`
    }
};

const resource = {
    name: 'record-set',
    // eslint-disable-next-line quotes
    defaultQuery: "[].rrsets[].{name:name, type:type, ttl:ttl, records:join(',',records[].content)}",
    url: args => `dns/zone/${args['zone-name']}`,
    options: {
        'zone-name': {
            description: 'DNS Zone Name',
            type: 'string',
            required: true
        }
    }
};

const category = function(resource) {

    const resourceDefaults = {
        url: () => resource.name
    };

    resource = Object.assign({}, defaults, resourceDefaults, resource);

    const category = Cli.createCategory(resource.name, {
        description: `Manage your ${resource.name.toUpperCase()}`,
        defaultQuery: resource.defaultQuery,
        url: resource.url
    });

    Object.keys(recordTypes).forEach(type => category.addChild(record(type, resource)));

    category.addChild(require('bin/generic/list')(resource));

    return category;
};

function record(type, resource) {
    const category = Cli.createCategory(type, {
        description: `Record Set Type ${type.toUpperCase()}`,
        defaultQuery: `[].rrsets[?type=='${type.toUpperCase()}'][].{name:name, type:type, ttl:ttl, records:join(',',records[].content)}`,
        url: args => `${resource.url(args)}/rrsets/${type.toUpperCase()}`
    });

    category.addChild(require('bin/generic/list')(resource));
    category.addChild(createRecordSet(type, resource));
    category.addChild(deleteRecordSet(type, resource));
    category.addChild(addRecord(type, resource));
    category.addChild(removeRecord(type, resource));

    return category;
};

const handleCreate = type => args => {

    const url = args.$node.parent.config.url(args);

    args['zone-name'] = addTrailingDot(args['zone-name']);

    const data = {
        name: formatRecordName(args.name, args['zone-name'])
      , type: type
      , ttl: args.ttl
      , records: [{ content: recordTypes[type].content(args), disabled: false }]
    };

    // TODO handle array
    /*
    if (args.records) {
         data.records = args.records.map(value => ({ content: value, disabled: false }));
    }
    */

    return args.helpers.api
        .post(url, data)
        .then(result => args.helpers.sendOutput(args, result))
    ;
};

function createRecordSet(type, resource) {

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
        options: Object.assign({}, options, resource.options, recordTypes[type].options),
        handler: handleCreate(type)
    });
};

const handleDelete = () => args => {
    args['zone-name'] = addTrailingDot(args['zone-name']);

    const name = formatRecordName(args.name, args['zone-name']);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    return args.helpers.api
        .delete(url)
        .then(result => args.helpers.sendOutput(args, result))
    ;
};

function deleteRecordSet(type, resource) {

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
      , handler: handleDelete(type, resource)
    });
};

const handleAddRecord = type => args => {

    args['zone-name'] = addTrailingDot(args['zone-name']);
    const name = formatRecordName(args.name, args['zone-name']);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    return args.helpers.api
        .get(url)
        .then(rset => {
            rset.records.push({ content: recordTypes[type].content(args), disabled: false });

            return args.helpers.api
                .patch(url, rset)
                .then(result => args.helpers.sendOutput(args, result))
            ;
        });
};

function addRecord(type, resource) {

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
        options: Object.assign({}, options, resource.options, recordTypes[type].options),
        handler: handleAddRecord(type)
    });
};

const handleRemoveRecord = type => args => {

    args['zone-name'] = addTrailingDot(args['zone-name']);
    const name = formatRecordName(args.name, args['zone-name']);
    const url = `${args.$node.parent.config.url(args)}/${name}`;

    return args.helpers.api
        .get(url)
        .then(rset => {
            const content = recordTypes[type].content(args);

            rset.records = rset.records.filter(record => record.content !== content);

            return args.helpers.api
                .patch(url, rset)
                .then(result => args.helpers.sendOutput(args, result))
            ;
        });
};

function removeRecord(type, resource) {

    const options = {
        name: {
            description: 'Record Set name',
            type: 'string',
            required: true
        }
    };

    return Cli.createCommand('remove-record', {
        description: 'Remove record',
        plugins: resource.plugins,
        options: Object.assign({}, options, resource.options, recordTypes[type].options),
        handler: handleRemoveRecord(type)
    });
};

module.exports = category(resource);
