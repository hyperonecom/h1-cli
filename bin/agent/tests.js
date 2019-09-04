'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

const name = `agent-test-${now}`;
const createParams = '--type container';

ava.serial('agent life cycle', tests.resourceLifeCycle('agent', {
    createParams: `--name ${name} ${createParams}`,
    stateCreated: 'Unknown',
    skipFqdn: true,
    skipTransfer: true, // must be 'Online'
}));

ava.serial('create agent with credentials', async t => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

    const agent = await tests.run(`agent create --name ${tests.getName(t.title)} --type container --ssh-file ${sshFilename}`);

    const credentials = await tests.run(`agent credential cert list --agent ${agent.id}`);
    t.true(credentials.length > 0);

    await tests.remove('agent', agent);
});
