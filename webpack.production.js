const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

console.log('Webpack PROD');

const exp = merge(common, {
    devtool: 'inline-source-map',
    entry: [path.join(__dirname, 'src/main.ts')],
    mode: 'production',
    optimization: {
        minimize: false,
    },
});

module.exports = exp;
