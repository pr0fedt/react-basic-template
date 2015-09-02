'use strict';

import path from 'path';
import webpack from 'webpack';

const appRoot = path.join(__dirname, '..', 'src', 'frontend');
const buildDir = path.join(__dirname, '..', 'build', 'frontend');

export const FrontendDevConfig = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/dev-server',
		'./src/frontend'
	],

	debug: true,

	devtool: '#source-map',
	
	output: {
		path: buildDir,
		publicPath: '/build/frontend',
		filename: 'bundle.js',
		pathinfo: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	resolve: {
		root: appRoot,
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