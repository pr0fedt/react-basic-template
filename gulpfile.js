'use strict';
require('babel/register');
try{
	require('./gulpfile.es6.js');	
} catch(err) {
	console.error('Gulpfile not found.');
	console.error('Make sure you have selected frontend build system.');
	console.error('You can run either "npm run select-webpack" or "npm run select-browserify"');
	process.exit(1);
}
