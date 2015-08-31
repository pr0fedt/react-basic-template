'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
// import babel from 'gulp-babel';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';

import {frontend} from './webpack-config';

const localServer = {
	host: 'localhost',
	port: 3000
};

gulp.task('default', ['compile']);
gulp.task('compile', ['compile-frontend-js', 'compile-frontend-less']);
gulp.task('watch', ['watch-frontend-js', 'watch-frontend-less']);

gulp.task('compile-frontend-js', (done) => 
	webpack(frontend, (err, stats) => {
		if(err){
			throw new gutil.PluginError('webpack', err);
		}
		gutil.log(`[webpack]${stats.toString({})}`);
		done(); 
	})
);

gulp.task('compile-frontend-less', () => gulp.src('./less/frontend/index.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./build/frontend'))
);

gulp.task('dev-frontend', (done) => {
	const compiler = webpack(frontend);
	const server = new DevServer(compiler, {
		publicPath: frontend.output.publicPath,
		hot: true
	});
	const {host, port} = localServer;
	server.listen(port, host, (err, res) => {
		if(err){
			console.log(err);
		}

		console.log(`Listening at ${host}:${port}`);

		/* Uncomment line below not to persist server */
		// done();
	});
});

gulp.task('watch-frontend-js', () => gulp.watch(
	'src/frontend/**/*.js',
	['compile-frontend']
));

gulp.task('watch-frontend-less', () => gulp.watch(
	'src/frontend/**/*.js',
	['compile-frontend']
));