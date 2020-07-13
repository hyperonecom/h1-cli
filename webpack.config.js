'use strict';
const path = require('path');
const process = require('process');

module.exports = {
    entry: './web/index.js',
    output: {
        path: path.resolve(__dirname, 'web'),
        filename: 'bundle.js',
    },
    target: 'web',
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        contentBase: path.join(__dirname, 'web'),
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                pathRewrite: { '^/api': '' },
                target: 'https://api.hyperone.com',
                secure: false,
                changeOrigin: true,
            },
        },
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'array-back': path.resolve(__dirname, 'node_modules/array-back'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, './lib/device/node'),
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ],
            },
        ],
    },
};
