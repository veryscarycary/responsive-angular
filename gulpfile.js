var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sass = require('gulp-sass');

gulp.task('js', function () {
  gulp.src(['js/**/module.js', 'js/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./bundle'));
});

gulp.task('convert-sass', function() {
    return gulp.src('./styles/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./bundle'));
});

gulp.task('watch', ['convert-sass', 'js'], function() {
  gulp.watch('styles/**/*.scss', ['convert-sass']);
  gulp.watch('js/**/*.js', ['js']);
});
