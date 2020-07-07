'use strict';

const displayResult = (output) => {
    if (typeof output === 'object') {
        console.dir(output, { depth: null });
    } else if (output) {
        console.log(output);
    }
};

module.exports = {
    displayResult,
};

