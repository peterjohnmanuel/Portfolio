/** Gulp Libraries */

var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();


/** Directories */
var directories = {
    baseDir: './src/',
    bootstrapDir: './bower_components/bootstrap-sass',
    cssDir: 'css/',
    distDir: './dist/',
    sassDir: 'scss/**/*.scss'
}

/** Sass  */
gulp.task('sass', function(){
    gulp.src(directories.baseDir + directories.sassDir)
    .pipe(sass())
    .pipe(sass({ includePaths: [config.bootstrapDir + '/assets/stylesheets'] }))
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

/** Watch */
gulp.task('watch', ['browser-sync'], function(){

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync']);