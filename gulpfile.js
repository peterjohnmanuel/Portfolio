/** Gulp Libraries */

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var fontmin = require('gulp-fontmin');
var imageResizer = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify/minifier');
var useref = require('gulp-useref');
var babel = require('gulp-babel');
var del = require('del');

var pump = require('pump');
var uglifyjs = require('uglify-js-harmony')
var browserSync = require('browser-sync').create();

/** Directories */
var path = {

    bootstrap: './bower_components/bootstrap-sass/',
    css: 'css/',
    dist: './dist/',
    font: './bower_components/font-awesome',
    fonts: 'fonts/',
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
            baseDir: path.src
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

gulp.task('fonts', function () {
    return gulp.src(path.src + path.fonts + '**/*')
        .pipe(gulp.dest(path.dist + path.fonts));
});

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
                width: 300,
                height: 300,
                quality: 100,
            }))
            .pipe(rename(function (path) { path.basename += "_thumbnail"; }))
            .pipe(imagemin())
            .pipe(gulp.dest(path.src + path.img + '/thumbnails/')),

        /** Modals */
        gulp.src(path.src + path.img + '/img_base/project_pictures/**/*')
            .pipe(plumber())
            .pipe(imageResizer({
                width: 450,
                height: 380,
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

/** Delete Task */
gulp.task('delete', function () {
    del(path.dist + '**/*');
});

/** Useref Task */
gulp.task('useref', function () {
    gulp.src(path.src + '*.html')
        .pipe(useref())
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        //.pipe(gulpIf('*.js', uglify({ preserveComments: 'license' }, uglifyjs)))
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulp.dest(path.dist));
});

/** Images Prod */
gulp.task('prod-image', function () {
    gulp.src(['!' + path.src + path.img + '{img_base,img_base/**}', '!' + path.src + path.img + 'fry-Logo.jpg', path.src + path.img + '**/*',])
        .pipe(gulp.dest(path.dist + path.img));

});
//+ path.src + path.img + 'img_base/**/*.*'
gulp.task('prod', ['delete', 'useref', 'fonts'], function () {

});
//gulp.task('prod', ['delete-dist']);
//gulp.task('prod', ['delete', 'prod-image']);

gulp.task('default', ['browser-sync']);