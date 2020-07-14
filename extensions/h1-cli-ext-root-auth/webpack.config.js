'use strict';
const path = require('path');
const process = require('process');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: "commonjs2",
    },
    target: 'node',
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.js', '.json'],
    },
    externals: function (context, request, callback) {
        if (/^(h1-cli-.*)$/i.test(request)) {
            return callback(null, 'commonjs ' + request);
        }
        callback();
    },
};