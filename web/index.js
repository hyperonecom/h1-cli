
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


docReady(async function () {
    process.stdout = { columns: undefined, rows: undefined };
    process.stderr = { columns: undefined, rows: undefined };

    const device = require('./device')(
        document.getElementById('terminal-container')
    );

    const program = await buildCli({
        openapiUrl: '/api/v2/openapi.json',
        device,
    });

    document.getElementById('submit').addEventListener("click", async () => {
        const cmd = document.getElementById('command').value.split(' ');
        if (cmd[0] == 'h1') {
            console.log('command: ', cmd);
            await program.run(cmd.slice(1));
        } else {
            document.getElementById('terminal-container').innerText = `command '${cmd}' unsupported`;
        }
    });
});
