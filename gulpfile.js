/** Gulp Libraries */

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var fontmin = require('gulp-fontmin');
var imageResizer = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");
var del = require('del');


var browserSync = require('browser-sync').create();


/** Directories */
var path = {

    bootstrap: './bower_components/bootstrap-sass/',
    css: 'css/',
    dist: './dist/',
    font: './bower_components/font-awesome',
    img: 'img/',
    sass: 'scss/**/*.scss',
    src: './src/'
};

/** Sass  */
gulp.task('sass', function () {
    gulp.src(path.src + path.sass)
        .pipe(plumber())
        .pipe(sass({ includePaths: [path.bootstrap + 'assets/stylesheets'] }))
        .pipe(gulp.dest(path.src + path.css))
        .pipe(browserSync.reload({ stream: true }));
});

/** Browser Sync */
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: path.base
        }
    });
});

/**Fonts */
// gulp.task('font', function () {
//     gulp.src(path.bootstrap + '/assets/fonts/**/*')
//         .pipe(fontmin())
//         .pipe(gulp.dest('fonts'))
//         .pipe(gulp.dest(directories.baseDir + 'fonts/'))
//         .pipe(browserSync.reload({ stream: true }));
//     gulp.src(directories.fontDir + '/fonts/**/*')
//         .pipe(fontmin())
//         .pipe(gulp.dest('fonts'))
//         .pipe(gulp.dest(directories.baseDir + 'fonts/'))
//         .pipe(browserSync.reload({ stream: true }));
// });

/**Image */
gulp.task('image', ['deleteImages'], function () {

    /** Technologies */
    gulp.src(path.src + path.img + '/img_base/technologies/**/*')
        .pipe(plumber())
        .pipe(imageResizer({
            width: 40,
            quality: 100,
            upscale: false,
            progressive: true
        }))
        .pipe(rename(function (path) { path.basename += "_technologies"; }))
        .pipe(imagemin())
        .pipe(gulp.dest(path.src + path.img + '/technologies/')),

        /** Thumbnails */ 
        gulp.src(path.src + path.img + '/img_base/project_pictures/**/*')
            .pipe(plumber())
            .pipe(imageResizer({
                width: 200,
                height: 250,
                quality: 100,
                upscale: false,
                progressive: true
            }))
            .pipe(rename(function (path) { path.basename += "_thumbnail"; }))
            .pipe(imagemin())
            .pipe(gulp.dest(path.src + path.img + '/thumbnails/')),

        /** Modals */
        gulp.src(path.src + path.img + '/img_base/project_pictures/**/*')
            .pipe(plumber())
            .pipe(imageResizer({
                width: 300,
                height: 350,
                quality: 100,
                upscale: false,
                progressive: true
            }))
            .pipe(rename(function (path) { path.basename += "_modal"; }))
            .pipe(imagemin())
            .pipe(gulp.dest(path.src + path.img + '/modals/'));
});


/** Delete Images */

gulp.task('deleteImages', function () {
    del(path.src + path.img + 'technologies/**/*');
    del(path.src + path.img + 'modals/**/*');
    del(path.src + path.img + 'thumbnails/**/*');
});


/** Watch */
gulp.task('watch', ['browser-sync'], function () {

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
    gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync']);