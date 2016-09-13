/** Gulp Libraries */

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var fontmin = require('gulp-fontmin');

var browserSync = require('browser-sync').create();


/** Directories */
var directories = {
    baseDir: './src/',
    bootstrapDir: './bower_components/bootstrap-sass/',
    cssDir: 'css/',
    distDir: './dist/',
    fontDir: './bower_components/font-awesome',
    sassDir: 'scss/**/*.scss'
};

/** Sass  */
gulp.task('sass', function(){
    gulp.src(directories.baseDir + directories.sassDir)
    .pipe(plumber())
    .pipe(sass({ includePaths: [directories.bootstrapDir + 'assets/stylesheets'] }))
    .pipe(gulp.dest(directories.baseDir + directories.cssDir))
    .pipe(browserSync.reload({stream: true}));
});

/** Browser Sync */
gulp.task('browser-sync', function(){
    browserSync.init({
        server : { 
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
        .pipe(browserSync.reload({stream: true}));
        gulp.src(directories.fontDir + '/fonts/**/*')
            .pipe(fontmin())
            .pipe(gulp.dest('fonts'))
            .pipe(gulp.dest(directories.baseDir + 'fonts/'))
            .pipe(browserSync.reload({stream: true}));
});

/** Watch */
gulp.task('watch', ['browser-sync'], function(){

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
     gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync']);