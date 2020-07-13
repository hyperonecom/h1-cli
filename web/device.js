/* eslint-disable no-console */
'use strict';

module.exports = (outputElement) => ({
    displayResult: (output) => {
        if (typeof output === 'object') {
            outputElement.innerText = JSON.stringify(output, null, 4);
            // console.dir(output, { depth: null });
        } else if (output) {
            outputElement.innerText = output;
        }
    },
    configLoad: () => {
        // eslint-disable-next-line no-undef
        const content = window.localStorage.getItem('cli-configuration');

        if (content) {
            return JSON.parse(content);
        }
    },
    configSave: (content) => {
        // eslint-disable-next-line no-undef
        window.localStorage.setItem('cli-configuration', JSON.stringify(content));
        console.log('Config updated', { content });
    },
    headers: () => ({}),
    log: (...args) => console.log(...args),
    debug: (...args) => console.debug(...args),
    readPassportFile: () => undefined,
    readDefaultPassport: () => undefined,
    importExtension: pattern => {
        const extensions = [];
        const r = require.context('../extensions', true, /\.js$/);
        r.keys().forEach(module => {
            console.log(module);
            if (module.match(`./${pattern}-.*/index.js`)) {
                const extension = r(module);
                extensions.push(extension);
            } else {
                console.log('Ignored module', module);
            }
        });
        return extensions;
    },
    mapUrl: (url) => url.replace('https://api.hyperone.com', '/api'),
});
