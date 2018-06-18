'use strict';

require('../scope/h1');

const cli = require('../bin');

const full_name = (entry) => {
    const names = [entry.name];
    let cur = entry;
    while (cur.parent) {
        names.push(cur.parent.name);
        cur = cur.parent;
    }

    return names.reverse().join(' ');
};

const stats_collector = parent => {
    const missing = [parent];
    let examples = 0;
    let total = 0;

    while (missing.length > 0) {
        const entry = missing.pop();
        if (entry.children) {
            missing.push(...entry.children);
        }
        if (entry.examples) {
            examples += 1;
        } else {
            console.log(`Missing documentation for ${full_name(entry)}`);
        }
        total += 1;
    }

    const coverage = Math.round(examples / total * 100);
    console.log(`${examples} items has examples out of ${total} (${coverage} % coverage).`);
};

const main = async () => {
    stats_collector(cli);
};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
