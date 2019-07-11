'use strict';
const process = require('process');
const path = require('path');

module.exports = {
    current: () => {
        if (process.pkg) {
            return [
                process.argv[0],
                ...process.argv.slice(2),
            ].join(' ');
        }
        return process.argv.join(' ');
    },
    detect: () => {
        if (!process.env.SHELL) {
            return;
        }
        return path.basename(process.env.SHELL);
    },
    set_environment: {
        powershell: (key, value) => `$Env:${key} = '${value}'`,
        cmd: (key, value) => `set ${key}='${value}'`,
        sh: (key, value) => `export ${key}='${value}'`,
        bash: (key, value) => `export ${key}='${value}'`,
    },
    unset_environment: {
        powershell: (key) => `Remove-Item Env:\\${key}`,
        cmd: (key) => `SET ${key}`,
        sh: (key) => `unset ${key}`,
        bash: (key) => `unset ${key}`,
    },
    run_command: {
        powershell: (cmd) => `& ${cmd} | Invoke-Expression`,
        cmd: (cmd) => `@FOR /f "tokens=*" %i IN ('${cmd}') DO @%i`,
        sh: (cmd) => `eval $(${cmd})`,
        bash: (cmd) => `eval $(${cmd})`,
    },
};
