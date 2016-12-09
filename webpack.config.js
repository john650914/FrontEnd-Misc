var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'eventsource-polyfill', // 據說可以讓 Webpack 兼容 IE
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.sass$/,
				loader: 'style!css?sourceMap!sass',
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|gif|png)$/,
				loader: "file",
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|gif|png)$/,
				loader: "url",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			inject: 'body',
		})
	]
};