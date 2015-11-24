'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var vinylPaths = require('vinyl-paths');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var del = require('del');

gulp.task('clean-dist', function () {
    return del([
        './client/dist/'
    ]);
});

gulp.task('browserify', ['clean-dist'], function () {
    return browserify({
            entries: './client/App.js',
            debug: true
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./client/dist/build/'));
});

gulp.task('uglify', ['browserify'], function () {
    return gulp.src('./client/dist/build/app.js')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./client/dist/build/'));
});

function deploy() {
    return gulp.src('./client/dist/build/*')
        .pipe(vinylPaths(del))
        .pipe(gulp.dest('./client/dist/'));
}

gulp.task('default', ['browserify'], function () {
    return deploy();
});

gulp.task('production', ['browserify', 'uglify'], function () {
    return deploy();
});
