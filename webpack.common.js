const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    module: {
        rules: [
            {
                exclude: [path.resolve(__dirname, 'node_modules')],
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: [
        nodeExternals({
            allowlist: ['webpack/hot/poll?1000'],
        }),
    ],
};
