const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: false,
    optimization: {
        minimize: false,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // true for JS source maps
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },        
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            publicPath: 'http://www.decoupling-4.test/dist/',
            filename: '[file].map'
        })    
    ]
};