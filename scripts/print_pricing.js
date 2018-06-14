'use strict';

const fs = require('fs');
const path = require('path');

const request = require('superagent');
const jmespath = require('jmespath');

const table = require('../lib/table').table;

const priceLists = [
    {
        name: 'VM price',
        query: '[?resource==\'vm\' && type==\'flavour\'].merge({name: name, maxIPv4:data.vm.maxIPv4, maxhdd:data.vm.maxhdd, maxNetAdp:data.vm.maxNetAdp, cpu:data.vm.cpu, memory:data.vm.memory, period: billing.period}, billing.price)'
    },
    {
        name: 'Support price',
        query: '[?resource==\'tenant\' && type==\'support\'].merge({name: name, types: join(\', \', data.types), messages: join(\', \', data.messages),  period: billing.period}, billing.price)'
    },
    {
        name: 'Disk price',
        query: '[?resource==\'disk\' && type==\'flavour\'].merge({name: name, period: billing.period, sizeMax: data.sizeMax, sizeMin: data.sizeMin}, billing.price)'
    }
];


const main = async () => {
    if (process.argv.length < 3) {
        throw `Missing argument. Usage: ${process.argv[0]} ${process.argv[1]} [output_dir]`;
    }
    const output_dir = process.argv[2];

    const res = await request.get('https://api.hyperone.com/v1/service');
    const pricing = res.body;

    priceLists.forEach(priceList => {
        const slug = priceList.name.toLowerCase().replace(/\s/, '-');
        const filename = path.join(output_dir, `${slug}.md`);

        const wstream = fs.createWriteStream(filename);

        const rows = jmespath.search(pricing, priceList.query);
        const pricing_table = table(rows);

        const content = `# ${priceList.name}\n\n${pricing_table}`;

        fs.writeFileSync(filename, content);
        console.log('Saved', filename);
        wstream.end();
    });

};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
