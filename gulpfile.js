const gulp = require('gulp');
const sass = require('gulp-sass');
const SASS_INCLUDE_PATHS = require("bourbon").includePaths;

gulp.task('styles', function() {
    gulp.src('./public/stylesheets/application.scss')
        .pipe(sass({ includePaths: SASS_INCLUDE_PATHS }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['styles'], () => {
    gulp.watch('./public/stylesheets/**/*.scss', ['styles'])
});