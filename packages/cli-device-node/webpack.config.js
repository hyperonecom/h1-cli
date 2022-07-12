const webpack = require('webpack');

const path = require('path');
const process = require('process');

module.exports = {
    entry: {
        main: './index.js',
        h1: './bin/h1.js',
        rbx: './bin/rbx.js',
        h1_docs: './bin/h1_docs.js',
        rbx_docs: './bin/rbx_docs.js',
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
    plugins: [
        new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    ],
};
