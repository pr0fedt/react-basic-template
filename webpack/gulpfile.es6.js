'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
// import babel from 'gulp-babel';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';

import {FrontendDevConfig} from './webpack';

const devServerParam = {
	host: 'localhost',
	port: 3000
};

gulp.task('default', ['frontend:dev:compile']);
gulp.task('frontend:dev:compile', ['frontend:dev:js:compile', 'frontend:less:compile']);
gulp.task('frontend:dev:watch', ['frontend:dev:js:watch', 'frontend:less:watch']);

gulp.task('frontend:dev:html:copy', () => 
	gulp.src(FrontendDevConfig.html.source)
	.pipe(gulp.dest(FrontendDevConfig.html.destination))
);

gulp.task('frontend:dev:js:compile', ['frontend:dev:html:copy'], (done) => 
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

gulp.task('frontend:less:compile', () => 
	gulp.src('./style/frontend/index.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(FrontendDevConfig.paths.buildDir))
);

gulp.task('frontend:dev:js:watch', () => gulp.watch(
	'src/frontend/**/*.js',
	['frontend:dev:js:compile']
));

gulp.task('frontend:less:watch', () => gulp.watch(
	'style/frontend/**/*.less',
	['frontend:less:compile']
));

gulp.task('frontend:dev:server', (done) => {
	const compiler = webpack(FrontendDevConfig);
	const server = new DevServer(compiler, {
		contentBase: FrontendDevConfig.paths.wwwDir,
		publicPath: FrontendDevConfig.output.publicPath,
		hot: true
	});
	
	const {host, port} = devServerParam;
	server.listen(port, host, (err, res) => {
		if(err){
			throw new gutil.PluginError('webpack-dev-server', err);
		}
		gutil.log(
			'Dev server listening at', 
			gutil.colors.green(`${host}:${port}`)
		);
	});
});
