'use strict';

import path from 'path';
import webpack from 'webpack';

export const frontend = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/dev-server',
		'./src/frontend'
	],

	debug: true,
	devtool: '#source-map',
	output: {
		path: path.join(__dirname, '..', 'build', 'frontend'),
		filename: 'bundle.js',
		publicPath: '/build/',
		pathinfo: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	resolve: {
		root: path.join(__dirname, '..', 'src', 'frontend'),
		extensions: ['', '.js', '.es6']
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel?optional[]=runtime']
		}]
	}
};