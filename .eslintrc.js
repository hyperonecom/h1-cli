'use strict';

module.exports = {
    extends: [
        '@hyperone',
    ],
    plugins: [
        'jasmine',
    ],
    rules: {
        'no-console': 'error',
    },
    env: {
        jasmine: true,
    },
};
