var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var sass = require('gulp-sass');

gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate().on('error', (e)=>{console.log(e)}))
      .pipe(uglify().on('error', (e)=>{console.log(e)}) )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./bundle'));
});

gulp.task('convert-sass', function() {
    return gulp.src(['./styles/_reset.scss',
      './styles/_breakpoints.scss', './styles/*'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./bundle'));
});

gulp.task('watch', ['convert-sass', 'js'], function() {
  gulp.watch('styles/**/*.scss', ['convert-sass']);
  gulp.watch('src/**/*.js', ['js']);
});
