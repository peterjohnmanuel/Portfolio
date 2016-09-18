/** Gulp Libraries */

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var fontmin = require('gulp-fontmin');
var imageResizer = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");


var browserSync = require('browser-sync').create();


/** Directories */
var directories = {
    baseDir: './src/',
    bootstrapDir: './bower_components/bootstrap-sass/',
    cssDir: 'css/',
    distDir: './dist/',
    fontDir: './bower_components/font-awesome',
    imgDir: 'img/**/*',
    sassDir: 'scss/**/*.scss'
};

/** Sass  */
gulp.task('sass', function () {
    gulp.src(directories.baseDir + directories.sassDir)
        .pipe(plumber())
        .pipe(sass({ includePaths: [directories.bootstrapDir + 'assets/stylesheets'] }))
        .pipe(gulp.dest(directories.baseDir + directories.cssDir))
        .pipe(browserSync.reload({ stream: true }));
});

/** Browser Sync */
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: directories.baseDirectory
        }
    });
});

/**Fonts */
gulp.task('font', function () {
    gulp.src(directories.bootstrapDir + '/assets/fonts/**/*')
        .pipe(fontmin())
        .pipe(gulp.dest('fonts'))
        .pipe(gulp.dest(directories.baseDir + 'fonts/'))
        .pipe(browserSync.reload({ stream: true }));
    gulp.src(directories.fontDir + '/fonts/**/*')
        .pipe(fontmin())
        .pipe(gulp.dest('fonts'))
        .pipe(gulp.dest(directories.baseDir + 'fonts/'))
        .pipe(browserSync.reload({ stream: true }));
});

/**Image */
gulp.task('image', function () {
    gulp.src('./src/img/technologies/**/*')
        .pipe(plumber())
        .pipe(imageResizer({
            width: 40,
            quality: 100,
            upscale: false,
            progressive: true
        }))
        .pipe(rename(function (path) { path.basename += "_technologies"; }))
        .pipe(imagemin())
        .pipe(gulp.dest('./src/img/technologies/')),

        gulp.src('./src/img/thumbnails/**/*')
            .pipe(plumber())
            .pipe(imageResizer({
                width: 200,
                height: 250,
                quality: 250,
                upscale: true,
                progressive: true
            }))
            .pipe(rename(function (path) { path.basename += "_thumbnail"; }))
            .pipe(imagemin())
            .pipe(gulp.dest('./src/img/thumbnails/')),

        gulp.src('./src/img/modals/**/*')
            .pipe(plumber())
            .pipe(imageResizer({
                width: 300,
                height: 350,
                quality: 250,
                upscale: true,
                progressive: true
            }))
            .pipe(rename(function (path) { path.basename += "_modal"; }))
            .pipe(imagemin())
            .pipe(gulp.dest('./src/img/modals/'));
});


/** Watch */
gulp.task('watch', ['browser-sync'], function () {

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
    gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync']);