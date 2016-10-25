/* plugins */
const gulp              = require('gulp');
const sass              = require('gulp-sass');
const sourcemaps        = require('gulp-sourcemaps');
const autoprefixer      = require('gulp-autoprefixer');
const notify			= require('gulp-notify');
const cssnano           = require('gulp-cssnano');

/* src folders */
const sassDir           = 'sass';
const targetCss         = 'css';

/* Gulp tasks */
gulp.task('sass', function () {
    gulp.src(sassDir + '/layout.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", notify.onError("<%= error.message %>"))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(targetCss))
        .pipe(notify('SASS compiled successfully'));
});

gulp.task('default', function(){
    gulp.start(['sass']);
    gulp.watch(sassDir + '/**/*.scss', ['sass']);
});