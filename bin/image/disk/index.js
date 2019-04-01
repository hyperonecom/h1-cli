'use strict';
const genericResource = require('bin/generic');

module.exports = resource => genericResource({
    name: 'disk',
    url: args => `${resource.url(args)}/disk`,
    commands: ['show', 'list', 'download'],
    params: resource.params,
    options: resource.options,
    context: resource.context,
    plugins: resource.plugins,
    title: 'disk of image',
});
