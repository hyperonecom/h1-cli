const path = require('path');
const process = require('process');

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
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'array-back': require.resolve('array-back').replace('/dist/index.js', ''),
        },
    },
};
