const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true,
				uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
			})
		]
	},	
	plugins: [
		new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
		}),
		new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
	]
});