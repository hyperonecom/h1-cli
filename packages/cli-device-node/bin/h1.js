/* eslint-disable no-console */

import { buildCli } from '@hyperone/cli-core';
import { NodeDevice } from '../device';

const main = async () => {
    const program = await buildCli({
        openapiUrl: 'https://api.hyperone.com/v2/openapi.json',
        device: new NodeDevice('h1'),
    });
    return program.run(process.argv.slice(2));
};

main().catch(console.error);
