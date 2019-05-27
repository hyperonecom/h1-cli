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
        powershell: (key, value) => `$Env:${key} = ${quote([value])}`,
        cmd: (key, value) => `setx ${key}=${quote([value])}`,
        sh: (key, value) => `export ${key}=${quote([value])}`,
        bash: (key, value) => `export ${key}=${quote([value])}`,
    },
    unset_environment: {
        powershell: (key) => `Remove-Item Env:\\${key}`,
        cmd: (key) => `SETX ${key}`,
        sh: (key) => `unset ${key}`,
        bash: (key) => `unset ${key}`,
    },
    run_command: {
        powershell: (cmd) => `& ${quote(cmd)} | Invoke-Expression`,
        cmd: (cmd) => `\\t@FOR /f \\"tokens=*\\" %%i IN ('${quote(cmd)}') DO @%%i`,
        sh: (cmd) => `eval $(${quote(cmd)})`,
        bash: (cmd) => `eval $(${quote(cmd)})`,
    },
};
