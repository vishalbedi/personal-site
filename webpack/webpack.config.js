const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:path.join(__dirname, '../app/index.js'),
    output: {
        path : path.join(__dirname, '../dist/'),
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'server/views/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
            }
        ]
    }
};