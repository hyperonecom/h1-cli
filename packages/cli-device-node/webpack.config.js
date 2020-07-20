const path = require('path');
const process = require('process');

module.exports = {
    entry: {
        h1: './bin/h1.js',
        // rbx: './bin/rbx.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    target: 'node',
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'array-back': path.resolve(__dirname, 'node_modules/array-back'),
        },
    },
};
