/* eslint-disable no-console */

'use strict';

const { buildCli } = require('h1-cli-core');
const BrowserDevice = require('./../device');

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

class DemoBrowserDevice extends BrowserDevice {
    constructor(output) {
        super();
        this.output = output;
    }
    displayResult (output) {
        this.output.style.border = 'thick solid #00FF00';
        if (typeof output === 'object') {
            this.output.innerText = JSON.stringify(output, null, 4);
            // console.dir(output, { depth: null });
        } else if (output) {
            this.output.innerText = output;
        }
    }
    async displayError(err) {
        this.output.style.border = 'thick solid #FF0000';
        const msg = [String(err)];
        if (err.resp) {
            msg.push(JSON.stringify(await err.resp.json(), null, 4));
        }
        this.output.innerText = msg.join('\n');
    }
}

docReady(async function () {
    process.stdout = { columns: undefined, rows: undefined };
    process.stderr = { columns: undefined, rows: undefined };

    const outputElement = document.getElementById('terminal-container');
    const commandElement = document.getElementById('command');
    const submitElement = document.getElementById('submit');

    const program = await buildCli({
        openapiUrl: '/api/v2/openapi.json',
        device: new DemoBrowserDevice(outputElement),
    });

    commandElement.addEventListener('keyup', function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            event.preventDefault();
            submitElement.click();
        }
    });

    submitElement.addEventListener('click', async () => {
        const cmd = commandElement.value.split(' ');
        if (cmd[0] == 'h1') {
            console.log('command: ', cmd);
            outputElement.style.border = 'thick solid #0000FF';
            await program.run(cmd.slice(1));
        } else {
            document.getElementById('terminal-container').innerText = `command '${cmd}' unsupported`;
        }
    });
});
