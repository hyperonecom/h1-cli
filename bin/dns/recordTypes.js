'use strict';
const formatRecordName = require('./lib').formatRecordName;

module.exports = {
    a: {
        value: '8.8.3.3',
        to_bind: content => ({
            ip: content,
        }),
        to_content: record => record.ip,
        extraCommand: ['dynamicDns'],
    },
    aaaa: {
        value: 'fdda:5cc1:23:4::1f',
        to_bind: content => ({
            ip: content,
        }),
        to_content: record => record.ip,
    },
    cname: {
        value: 'cname-example.com',
        to_bind: content => ({
            alias: content,
        }),
        to_content: (record, name) => formatRecordName(record.alias, name),
    },
    txt: {
        value: 'some-text-value',
        to_bind: content => ({
            txt: content,
        }),
        to_content: record => record.txt,
    },
    caa: {
        value: '0 issue "letsencrypt.org"',
        to_bind: content => ({
            flags: content.split(' ')[0],
            tag: content.split(' ')[1],
            value: content.split(' ')[2],
        }),
        to_content: record => `${record.flags} ${record.tag} "${record.value}"`,
    },
    mx: {
        value: '10 mail.example.com',
        to_bind: content => ({
            preference: content.split(' ')[0],
            host: content.split(' ')[1],
        }),
        to_content: (record, name) => `${record.preference} ${formatRecordName(record.host, name)}`,
    },
    ns: {
        value: 'ns1.example.com',
        to_bind: content => ({
            host: content,
        }),
        to_content: (record, name) => formatRecordName(record.host, name),
    },
    srv: {
        value: '10 5 11 s1.example.com.',
        to_bind: content => ({
            priority: content.split(' ')[0],
            weight: content.split(' ')[1],
            port: content.split(' ')[2],
            target: content.split(' ')[3],
        }),
        to_content: (record, name) => `${record.priority} ${record.weight} ${record.port} ${formatRecordName(record.target, name)}`,
    },
    soa: {
        value: 'pns.hyperone.com. hostmaster.hyperone.com. 2018093002 15 180 1209600 1800',
    },
};
