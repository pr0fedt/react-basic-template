'use strict';

import path from 'path';
import webpack from 'webpack';

const rootDir = path.join(__dirname, '..', '..');
const wwwDir = path.join(rootDir, 'www');
const buildDir = path.join(wwwDir, 'build');
const appDir = path.join(rootDir, 'src', 'frontend');

export const FrontendDevConfig = {
	html: {
		source: path.join(rootDir, 'webpack', 'dev', 'index.html'),
		destination: wwwDir,
	},

	paths: {appDir, buildDir, rootDir, wwwDir},

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/dev-server',
		appDir
	],

	debug: true,

	devtool: '#source-map',
	
	output: {
		path: buildDir,
		publicPath: '/build',
		filename: 'bundle.js',
		pathinfo: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	resolve: {
		root: appDir,
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