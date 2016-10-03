const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')

gulp.task('watch', () => {
	const b = browserify({
		entries: ['src/App.js'],
		cache: {},
		packageCache: {},
		plugin: ['watchify']
	})

	b.on('update', makeBundle)

	function makeBundle() {
		b
			.transform('babelify', {presets: 'react'})
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('static/'))
	}
	makeBundle()
	return b
})
