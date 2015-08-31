'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', ['compile']);
gulp.task('compile', ['compile-frontend']);
gulp.task('watch', ['watch-frontend']);

gulp.task('compile-frontend', () => gulp.src('src/frontend/**/*.js')
	.pipe(babel({optional: ['runtime']}))
	.pipe(gulp.dest('build/frontend'))
);

gulp.task('watch-frontend', () => gulp.watch(
	'src/frontend/**/*.js',
	['compile-frontend']
));