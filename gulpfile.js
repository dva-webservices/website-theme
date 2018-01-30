var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('sass/www/style.scss')
    .pipe(sass({includePaths: ['sass/www']}))
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "maxLineLen": 80
    }))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

/*
gulp.task('styles', function() {
  return sass('src/sass/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('docs/css'))
    .pipe(livereload());
});
*/
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(livereload());
});


gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('sass/www/*.scss', ['sass']);
    gulp.watch('sass/www/components*.scss', ['sass']);
    gulp.watch('sass/www/pages/*.scss', ['sass']);
    gulp.watch('sass/www/setup/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts']);

});

gulp.task('server',function(){
    nodemon({
        'script': 'app.js',
        'ignore': 'js/*.js'
    });
});

gulp.task('serve', ['server','watch']);
