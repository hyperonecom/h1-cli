const openapi = require('./../lib/openapi');
const { buildProgram } = require('./../');

const provider = {
    'h1': 'https://api.hyperone.com/v2/openapi.json'
};

const table = Object.keys(provider).map(x => [x]);

describe.each(table)('.scope(%s)', (scope) => {

    test(`openapi.init successfully`, () => {
        return openapi.init(provider[scope])
    });

    test(`buildProgram successfully`, () => {
        return buildProgram()
    });
});

describe.each(table)('.scope(%s)', (scope) => {
    beforeEach(async () => {
        await openapi.init(provider[scope]);
    })

    test(`'h1 storage' call`, async () => {
        const program = buildProgram().exitOverride();
        try {
            await program.parseAsync(["h1-cli", "storage"]);
        } catch (err) {
            console.log(err);
        }
    });
});