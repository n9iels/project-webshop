/* plugins */
var gulp              = require('gulp');
var concat            = require('gulp-concat');
var uglify            = require('gulp-uglify');
var sass              = require('gulp-sass');
var sourcemaps        = require('gulp-sourcemaps');
var autoprefixer      = require('gulp-autoprefixer');
var notify			  = require('gulp-notify');
var cssnano           = require('gulp-cssnano');

/* src folders */
var sassDir           = __dirname + '/resources/sass';
var targetCss         = __dirname + '/resources/css';

/* Compile SASS to CSS */
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

/* Combine all scripts */
gulp.task('scripts', function() {
    gulp.src(['./libraries/*.js', './models/*.js', './controllers/*.js', './views/**/*.js', './js/pageSwitcher.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./resources/js'));
});

gulp.task('default', function(){
    gulp.start(['scripts']);
    gulp.start(['sass']);
    gulp.watch(sassDir + '/**/*.scss', ['sass']);
});