const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const nodemon = require('gulp-nodemon')
const prefix = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const pug = require('gulp-pug')
const reload = browserSync.reload

gulp.task('browser-sync', function () {
  browserSync.init({
    notify:false,
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./**/*.pug',['html'])
  gulp.watch("./**/*.scss", ['css']);
  gulp.watch("./asset/js/**/*.js",reload);
})

gulp.task('css', () => {
  return gulp.src('./asset/scss/main.scss')
  .pipe(sass())
  .pipe(prefix())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream())
})


gulp.task('html', () => {
  return gulp.src('./views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
  .on('end',browserSync.reload)
})

gulp.task('default', ['browser-sync', 'html', 'css'])
