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
    parser: '@babel/eslint-parser', //remove when eslint support it natively https://github.com/eslint/eslint/discussions/15305
    parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            plugins: [
                '@babel/plugin-syntax-import-assertions', //remove when eslint support it natively https://github.com/eslint/eslint/discussions/15305
            ],
        },
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
                'packages/cli-device-browser/**',
                'packages/cli-device-browser-demo/**',
            ],
            env: {
                browser: true,
                commonjs: true,
            },
        },
    ],
};
