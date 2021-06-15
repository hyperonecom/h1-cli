const path = require('path');
const process = require('process');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    target: 'web',
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
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
    optimization: {
        minimize: false,
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
    resolve: {
        extensions: ['.js', '.json'],
        fallback: {
            // command-line-usage@6.1.1 require table-layout@^1.0.1
            // table-layout<2.1.0 requires wordwrapjs@^5.0.1
            // wordwrapjs<5.0.0 requires 'os'
            // TODO: bump command-line-usage
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
            // required by @apidevtools/json-schema-ref-parser
            https: require.resolve('https-browserify'),
            http: require.resolve('stream-http'),
            path: require.resolve('path-browserify'),
            vm: require.resolve('vm-browserify'),
        },
        alias: {
            'array-back': require.resolve('array-back').replace('/dist/index.js', ''),
        },
    },
};
