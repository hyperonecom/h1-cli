
const path = require('path');
const process = require('process');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.js', '.json'],
    },
    optimization: {
        minimize: false, // see https://github.com/terser/terser/issues/764
    },
    externals: ['@hyperone/cli-core', '@hyperone/cli-framework'],
};