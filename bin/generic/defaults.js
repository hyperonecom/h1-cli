'use strict';

module.exports = {
    commands: ['list', 'show', 'delete', 'history', 'rename'],
    options: {},
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/api'),
        require('bin/_plugins/projectRequired'),
        require('bin/_plugins/outputFormat'),
    ],
    extraCommands: [],
};
