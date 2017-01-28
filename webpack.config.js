var webpack = require('webpack');
module.exports = {
	entry: './modules/app.js',
	output: {
		filename: './default.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}