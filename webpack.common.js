const webpack = require('webpack');
const path = require('path');

module.exports = {
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    entry: {
        'bootstrap': './js/bootstrap.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/dist'
    },        
    module: {
        rules: [
            {
                parser: {
                    system: false
                },
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }                        
                    }
                ]
            }
        ]
    }
}