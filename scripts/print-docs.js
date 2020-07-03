const { Command } = require('commander');
const { buildCli } = require('./../');
const fs = require('fs');

const fullName = (cmd) => {
    const parts = [];
    while (cmd.parent) {
        parts.push([cmd.name()])
        cmd = cmd.parent;
    }
    parts.reverse();
    return parts.join(" ");
}
const documentCommand = (out, cmd, level = 1) => {
    const headerPrefix = "#".repeat(level);
    out.write(`${headerPrefix} ${fullName(cmd)}\n\n`)
    out.write('```\n');
    out.write(cmd.helpInformation())
    out.write('```\n\n');
    for (const child of cmd.commands) {
        documentCommand(out, child, level + 1)
    }
};

const generator = async (cmd) => {
    const opts = cmd.opts();
    const cli = await buildCli({
        openapiUrl: opts.url
    });
    const out = opts.outputFile == '-' ? process.stdout : fs.createWriteStream(opts.outputFile, { encoding: 'utf-8' })
    for (const cmd of cli.commands) {
        documentCommand(out, cmd)
    }
};

const main = async () => new Command('print').
    option('--url [url]', 'URL of OpenAPI spec', 'https://api.hyperone.com/v2/openapi.json').
    option('--output-file [file]', 'Output file', '-').
    action(generator).
    parseAsync();

main().catch(console.error);