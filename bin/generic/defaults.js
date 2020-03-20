'use strict';

module.exports = {
    commands: ['list', 'show', 'delete', 'history', 'rename', 'tag', 'service', 'access/resource'],
    options: {},
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/projectRequired'),
        require('bin/_plugins/locationRequired'),
        require('bin/_plugins/outputFormat'),
        require('bin/_plugins/api'),
    ],
    extraCommands: [],
};
