var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();


/** Directory */
var directory = {
    baseDirectory: './src/',
    distDirectory: './dist/'
}


gulp.task('sass', function(){
    gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', function(){
    browserSync.init({
        server : { 
            baseDir: directory.baseDirectory
        }
    });
});

gulp.task('watch', ['browser-sync'], function(){

    gulp.watch("./src/scss/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync']);