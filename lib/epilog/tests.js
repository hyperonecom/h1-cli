'use strict';

const ava = require('ava');

const epilog = require('.');

const test_case = {
    'variable match': {
        content: 'A {{ A }}',
        context: {A: 'my value'},
        result: 'A my value'
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
        content: "{{command_name}} {{listParams | ''}}",
        context: {
            command_name: 'h1 vm list',
            listParams: '--vm test-vm',
        },
        result: 'h1 vm list --vm test-vm',
    },
};

Object.entries(test_case).forEach(([name, value]) => {
    ava.test(`template_render ${name}`, async t => {
        const rendered = epilog.template_render(value.content, value.context);
        t.true(rendered === value.result);
    });
});

ava.test(`template_render raises exception on unknown variable`, async t => {
    t.throws(() => {
		epilog.template_render('{{unknown_variable}}', '');
	}, Error);
});