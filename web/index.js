/* eslint-disable no-console */

'use strict';

const { buildCli } = require('../index');

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


const getDevice = (outputElement) => ({
    displayResult: (output) => {
        if (typeof output === 'object') {
            outputElement.innerText = JSON.stringify(output, null, 4);
            // console.dir(output, { depth: null });
        } else if (output) {
            outputElement.innerText = output;
        }
    },
    configLoad: () => {
        // eslint-disable-next-line no-undef
        const content = window.localStorage.getItem('cli-configuration');

        if (content) {
            return JSON.parse(content);
        }
    },
    configSave: (content) => {
        // eslint-disable-next-line no-undef
        window.localStorage.setItem('cli-configuration', JSON.stringify(content));
        console.log('Config updated', { content });
    },
    headers: () => ({}),
    log: (...args) => console.log(...args),
    debug: (...args) => console.debug(...args),
    readPassportFile: () => undefined,
    readDefaultPassport: () => undefined,
    importExtension: pattern => {
        const extensions = [];
        const r = require.context('../extensions', true, /\.js$/);
        r.keys().forEach(module => {
            console.log(module);
            if (module.match(`./${pattern}-.*/index.js`)) {
                const extension = r(module);
                extensions.push(extension);
            } else {
                console.log('Ignored module', module);
            }
        });
        return extensions;
    },
    mapUrl: (url) => url.replace('https://api.hyperone.com', '/api'),
});

docReady(async function () {
    process.stdout = { columns: undefined, rows: undefined };
    process.stderr = { columns: undefined, rows: undefined };

    const device = getDevice(
        document.getElementById('terminal-container')
    );

    const program = await buildCli({
        openapiUrl: '/api/v2/openapi.json',
        device,
    });

    document.getElementById('submit').addEventListener('click', async () => {
        const cmd = document.getElementById('command').value.split(' ');
        if (cmd[0] == 'h1') {
            console.log('command: ', cmd);
            await program.run(cmd.slice(1));
        } else {
            document.getElementById('terminal-container').innerText = `command '${cmd}' unsupported`;
        }
    });
});
