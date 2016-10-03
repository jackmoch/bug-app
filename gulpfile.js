const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')
const sourcemaps = require('gulp-sourcemaps')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const gutil = require('gulp-util')
const babelify = require('babelify')
const watch = require('gulp-watch')

gulp.task('jsx', () => {

	const b = browserify({
		entries: ['./src/App.jsx'],
		extensions: ['.jsx'],
		transform: babelify,
		debug: true
	})
	return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./static'));
  	console.log('Bundle updated, success')
})

gulp.task('watch', () => {
    gulp.watch('./src/**/*.jsx', ['jsx'])
})

gulp.task('default', ['jsx', 'watch'] );