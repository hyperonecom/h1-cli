const path = require('path');
const process = require('process');

module.exports = {
    entry: {
        h1: './bin/h1.js',
        h1_docs: './scripts/print-docs.js',
        main: './index.js',
        rbx: './bin/rbx.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    mode: process.env.NODE_ENV || 'development',
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'array-back': require.resolve('array-back').replace('/dist/index.js', ''),
        },
    },
};
