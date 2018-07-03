'use strict';

const ava = require('ava');

const epilog = require('.');

const test_case = {
    'variable match': {
        content: 'A {{ A }} ',
        context: {},
        result: 'A {{ A }} ',
    },
    'missing context': {
        content: 'A {{ A }} ',
        context: {},
        result: 'A {{ A }} ',
    },
    'default value literal': {
        content: "{{ A | 'b' }}",
        context: {},
        result: 'b',
    },
    'default value variable': {
        content: '{{ A | B }}',
        context: {B: 'replaced'},
        result: 'replaced',
    },
    'ignore literal if variable exists': {
        content: "{{command_name}} list {{listParams | ''}}",
        context: {
            command_name: 'h1 vm list',
            listParams: '--vm test-vm',
        },
        result: 'h1 vm nic list {{listParams}}',
    },
};

Object.entries(test_case).forEach(([name, value]) => {
    ava.test(`template render ${name}`, async t => {
        const rendered = epilog.template_render(value.content, value.context);
        t.true(rendered === value.result);
    });
});
