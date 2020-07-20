

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
    parserOptions: {
        sourceType: 'module',
    },
    globals: {
        __non_webpack_require__: 'readonly',
    },
    overrides: [
        {
            files: [
                'packages/**.js',
                'extensions/**.js',
            ],
            parserOptions: {
                sourceType: 'module',
            },
        },
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
