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
    overrides: [
        {
            files: [
                '**/web/*.js',
                '**/public/*.js',
            ],
            env: {
                browser: true,
                commonjs: true,
            },
        },
    ],
};
