/* plugins */
var gulp              = require('gulp');
var concat            = require('gulp-concat');
var uglify            = require('gulp-uglify');
var sass              = require('gulp-sass');;
var autoprefixer      = require('gulp-autoprefixer');
var notify			  = require('gulp-notify');
var cleanCSS          = require('gulp-clean-css');

/* src folders */
var sassDir           = __dirname + '/resources/sass';
var jsDir             = __dirname + '/resources/js'
var targetCss         = __dirname + '/resources/css';

/* Compile SASS to CSS */
gulp.task('sass', function () {
    gulp.src(sassDir + '/layout.scss')
        .pipe(sass())
        .on("error", notify.onError("<%= error.message %>"))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(targetCss))
        .pipe(notify('SASS compiled successfully'));
});

/* Combine all scripts */
gulp.task('scripts', function() {
    gulp.src(['./libraries/**/*.js', './models/*.js', './controllers/*.js', './views/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./resources/js'));
});

gulp.task('default', function(){
    gulp.start(['scripts']);
    gulp.start(['sass']);
    gulp.watch(['./libraries/**/*.js', './models/*.js', './views/**/*.js', './controllers/*.js'], ['scripts']);
    gulp.watch(sassDir + '/**/*.scss', ['sass']);
});

gulp.task('sync', function() {
    var browserSync = require('browser-sync').create();

    gulp.start(['scripts']);
    gulp.start(['sass']);

    browserSync.init({
        proxy: "az-games.dev"
    });

    gulp.watch(sassDir + '/**/*.scss', ['sass']).on('change', browserSync.reload);;
    gulp.watch(['./libraries/**/*.js', './models/*.js', './views/**/*.js', './controllers/*.js'], ['scripts']).on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload)
});

gulp.task('sync', function() {
    var browserSync = require('browser-sync').create();

    gulp.start(['scripts']);
    gulp.start(['sass']);

    browserSync.init({
        proxy: "az-games.dev"
    });

    gulp.watch(sassDir + '/**/*.scss', ['sass']).on('change', browserSync.reload);;
    gulp.watch([jsDir + '/**/*.js', './models/*.js', './views/**/*.js', './controllers/*.js'], ['scripts']).on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload)
});

gulp.task('jenkins', function(){
    gulp.start(['sass']);
    gulp.start(['scripts']);
});