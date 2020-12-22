import { Command } from '@hyperone/cli-framework';
import { split } from 'shlex';

const reply = (entries, prefix) => entries.filter(x => x.startsWith(prefix)).join('\n');

export default new Command({
    name: 'comply',
    options: [
        { name: 'cmd', required: true },
    ],
    handler: async (opts, cmd) => {
        // find root command
        let root = cmd;
        while (root.parent) root = root.parent;
        const argv = split(opts._all.cmd);
        // console.log({argv});
        const last_arg = argv[argv.length - 1];
        // walk down to tree to category OR last command
        let arg, index, children;
        let command = root;
        for (index = 1; index < argv.length; index++) {
            if (!command.findCommand) {
                break;
            }
            children = await command.loadCommands();
            arg = argv[index];
            if (!children.some(x => x.name == arg)) {
                break;
            }
            command = children.find(x => x.name == arg);
        }
        // autocomplete for option
        if (last_arg.startsWith('-')) {
            const options = await command.getOptions();
            const entries = options.map(x => `--${x.name}`);
            return reply(entries, last_arg);
        }
        // autocomplete for command
        if (command.findCommand && children) {
            const entries = children.map(x => x.name);
            return reply(entries, arg);
        }

        return reply([], last_arg);
    },
});
