/* eslint-disable no-console */

import { buildCli } from '@hyperone/cli-core';
import { NodeDevice } from '../device';

const main = async () => {
    const program = await buildCli({
        openapiUrl: 'https://api.rootbox.com/v2/openapi.json',
        device: new NodeDevice('rbx'),
    });
    return program.run(process.argv.slice(2));
};

main().catch(console.error);
