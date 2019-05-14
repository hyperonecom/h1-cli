'use strict';
const process = require('process');
const path = require('path');
const quote = require('shell-quote').quote;

module.exports = {
    detect: () => {
        if (!process.env.SHELL) {
            return;
        }
        return path.basename(process.env.SHELL);
    },
    set_environment: {
        windows: (key, value) => `SET ${key}=${quote([value])}`,
        powershell: (key, value) => `$Env:${key} = ${quote([value])}`,
        cmd: (key, value) => `setx ${key}=${quote([value])}`,
        sh: (key, value) => `export ${key}=${quote([value])}`,
        bash: (key, value) => `export ${key}=${quote([value])}`,
    },
};
