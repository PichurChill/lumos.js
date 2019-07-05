const webpack = require('webpack')
const path = require('path')

const pkg = require('../package.json')

const rootPath = path.resolve(__dirname, '../')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = {
    mode: 'production',
    entry: {
        'lumos': path.resolve(rootPath, 'src', 'index.js'),
        'lumos.min': path.resolve(rootPath, 'src', 'index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(rootPath, 'dist'),
        library: 'lumos', // pkg.name
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }
}

module.exports = config