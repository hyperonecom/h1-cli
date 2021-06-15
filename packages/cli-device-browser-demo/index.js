/* eslint-disable no-console */
import { buildCli, BrowserDevice } from '@hyperone/cli-device-browser';
import { quote } from 'shell-quote';

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
    constructor({output}) {
        super();
        this.output = output;
    }
    displayResult(output) {
        this.output.style.border = 'thick solid #00FF00';
        if (typeof output === 'object') {
            this.output.innerText = JSON.stringify(output, null, 4);
            // console.dir(output, { depth: null });
        } else if (output) {
            this.output.innerText = output;
        }
    }
    async displayError(err) {
        console.log(err);
        this.output.style.border = 'thick solid #FF0000';
        const msg = [String(err)];
        if (err.resp) {
            msg.push(JSON.stringify(await err.resp.json(), null, 4));
        }
        this.output.innerText = msg.join('\n');
    }
    mapUrl(url) {
        return url.replace('https://api.hyperone.com/v2', '/api/v2');
    }
}

docReady(async function () {
    const outputElement = document.getElementById('terminal-container');
    const commandElement = document.getElementById('command');
    const submitElement = document.getElementById('submit');
    const operationElement = document.getElementById('operation');
    const parametersElement = document.getElementById('parameters');
    const requestBodyElement = document.getElementById('requestBody');
    const device = new DemoBrowserDevice({
        output: outputElement,
    });
    const program = await buildCli({
        openapiUrl: 'http://localhost:9000/api/v2/openapi.json',
        device,
    });

    const getJson = (element) => {
        try {
            const result = JSON.parse(element.value);
            element.style.border = 'thick solid #00FF00';
            return result;
        } catch (err) {
            element.style.border = 'thick solid #FF0000';
        }
    };
    const renderCommand = async function () {
        const operationId = operationElement.value;
        const requestBody = getJson(requestBodyElement);
        const parameters = getJson(parametersElement);
        if (!operationId || !requestBody || !parameters) {
            return;
        }
        const command = await program.program.findCommand(operationId);
        const argv = command.generateArgv({ requestBody, parameters });
        commandElement.value = quote(argv);
    };

    operationElement.addEventListener('change', renderCommand);
    parametersElement.addEventListener('keyup', renderCommand);
    requestBodyElement.addEventListener('keyup', renderCommand);

    commandElement.addEventListener('keyup', function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            event.preventDefault();
            submitElement.click();
        }
    });
    submitElement.addEventListener('click', async () => {
        const cmd = commandElement.value.split(' ');
        if (cmd[0] == device.getName()) {
            console.log('command: ', cmd);
            outputElement.style.border = 'thick solid #0000FF';
            await program.run(cmd.slice(1));
        } else {
            document.getElementById('terminal-container').innerText = `command '${cmd}' unsupported`;
        }
    });
});
