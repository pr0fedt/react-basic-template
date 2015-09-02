'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
// import babel from 'gulp-babel';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';

import {FrontendDevConfig} from './webpack-config';

const localServer = {
	host: 'localhost',
	port: 3000
};

gulp.task('default', ['compile']);
gulp.task('compile', ['compile-frontend-js', 'compile-frontend-less']);
gulp.task('watch', ['watch-frontend-js', 'watch-frontend-less']);

gulp.task('compile-frontend-js', (done) => 
	webpack(FrontendDevConfig, (err, stats) => {
		if(err){
			throw new gutil.PluginError('webpack', err);
		}
		gutil.log(
			gutil.colors.green('[webpack]'),
			gutil.colors.blue(stats.toString({}))
		);
		done(); 
	})
);

gulp.task('compile-frontend-less', () => 
	gulp.src('./style/frontend/index.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./build/frontend'))
);

gulp.task('dev-frontend', (done) => {
	const compiler = webpack(FrontendDevConfig);
	const server = new DevServer(compiler, {
		publicPath: FrontendDevConfig.output.publicPath,
		hot: true
	});
	
	const {host, port} = localServer;
	server.listen(port, host, (err, res) => {
		if(err){
			throw new gutil.PluginError('webpack-dev-server', err);
		}
		gutil.log(
			'Dev server listening at', 
			gutil.colors.green(`${host}:${port}`)
		);
		/* Uncomment line below not to persist server */
		// done();
	});
});

gulp.task('watch-frontend-js', () => gulp.watch(
	'src/frontend/**/*.js',
	['compile-frontend-js']
));

gulp.task('watch-frontend-less', () => gulp.watch(
	'style/frontend/**/*.less',
	['compile-frontend-less']
));