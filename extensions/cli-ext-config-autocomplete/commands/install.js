import { Command } from '@hyperone/cli-framework';
import fs from 'fs';
import path from 'path';
import os from 'os';

export default new Command({
    name: 'install',
    options: [
    ],
    handler: async (opts, cmd) => {
        const start = process.pkg ? process.argv[0] : `${process.argv[0]} ${process.argv[1]}`;
        const source_content = [
            '_cli()',
            '{',
            `words=$(IFS=" "; ${start} config autocomplete --cmd "\${COMP_WORDS[*]}")`,
            'COMPREPLY=( $(compgen -W  "${words}" -- ${cur}) )',
            'return 0',
            '}',
            'complete -F _cli h3',
        ].join('\n');
        const shim_path = path.join(await cmd.device.dataDir(), 'completion2.sh');
        await fs.promises.writeFile(shim_path, source_content, {
            mode: 0o755,
        });
        const complete_loader = [
            `# begin ${cmd.device.scope} completion`,
            `source ${shim_path}`,
            `# end ${cmd.device.scope} completion`,
        ].join('\n');
        cmd.device.log(`Completion shim saved in path ${shim_path}`);
        const loader_path = path.join(os.homedir(), '.bash_profile');
        await fs.promises.writeFile(loader_path, complete_loader, { flag: 'a' });
        cmd.device.log(`Completion appended loader in path ${loader_path}`);
    },
});
