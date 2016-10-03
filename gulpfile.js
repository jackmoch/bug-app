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
			.on('error', (err) => {
				console.error(err.message)
				console.error(err.codeFrame)
			})
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('static/'))
		console.log('Bundle updated, success')
	}
	makeBundle()
	return b
})

gulp.task('default', ['watch']);