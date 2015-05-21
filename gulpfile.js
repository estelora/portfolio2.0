/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

// var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
// requireDir('./gulp/tasks', { recurse: true });

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// everything moves from 'src' to 'dist'

gulp.task('default', ['copy', 'sass'], function() {
  gulp.watch('src/**/*', ['copy', 'sass']);
});

gulp.task('copy', function() {
  return gulp.src(['src/**/*', '!src/sass/**/**'])
    .pipe(gulp.dest('dist'))
})

gulp.task('sass', function() {
  return gulp.src('src/sass/app.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
})
