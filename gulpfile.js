var gulp = require('gulp');
var browserSync = require('browser-sync');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var filter = require('gulp-filter');
var order = require('gulp-order');
var print = require('gulp-print');
var paths = {
  'jsFiles'  : [],
  'htmlFiles': ['public/**/**/*.html']
};

gulp.task('js', function() {
  return gulp
    .src(mainBowerFiles())
    .pipe(filter('**/**/*.js'))
    .pipe(print())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('inject', ['js'], function() {
  var target = gulp.src('public/index.html');
  var sources = gulp.src('public/js/all.js', {
    read: false //will not read file contents = faster
  });
}) ;

gulp.task('browser-sync', ['js', 'inject'], function() {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync.init({

    // watch the following files; changes will be injected (css & images) or cause browser to refresh
    files: ['public/**/*.*'],

    // informs browser-sync to proxy our expressjs app which would run at the following location
    //proxy: 'http://localhost:3000',

    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
   // port: 7000,

    // open the proxied app in chrome
    browser    : ['google-chrome'],
    reloadDelay: 1000
  });
})


gulp.task('default', ['browser-sync'], function() {
 // gulp.watch(paths.jsFiles, ['js', 'inject'])
})