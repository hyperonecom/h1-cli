'use strict';

const openapi = require('./../lib/openapi');
const { buildProgram } = require('./../lib/cli/dynamic');

const provider = {
    h1: 'https://api.hyperone.com/v2/openapi.json',
};

const table = Object.keys(provider).map(x => [x]);

describe.each(table)('.scope(%s)', (scope) => {
    beforeEach(async () => {
        await openapi.init(provider[scope]);
    });

    test('\'h1 storage\' call', async () => {
        const program = buildProgram();
        try {
            await program.exec(['node', __dirname, 'h1-cli', 'storage']);
        } catch (err) {
            console.log(err);
        }
    });
});
