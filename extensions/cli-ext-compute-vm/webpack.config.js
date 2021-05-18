
const path = require('path');
const process = require('process');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    target: 'node',
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.js', '.json'],
    },
    optimization: {
        minimize: false,
    },
    externals: {
        '@hyperone/cli-core':'commonjs2 @hyperone/cli-core',
        '@hyperone/cli-framework':'commonjs2 @hyperone/cli-framework',
    },
};