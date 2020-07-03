const { program, Command } = require('commander');

program
    .addCommand(
        new Command("start").storeOptionsAsProperties(false).option('--name [name]').action(() => console.log('success'))
    ).parse();