var gulp = require('gulp');
var uglify = require('gulp-uglyfly');
var concat = require('gulp-concat');
var cssMin= require('gulp-css');



gulp.task('css', function(){

	gulp.src([
          'css/nav-menu.css',
		  'css/main.css',
		  'css/solutions.css',
		  'css/advantages.css',
		  'css/pricing.css',
	      'css/faq.css',
          'css/banner.css',
		  'css/features.css',
  		  'css/footer.css'
		])

	     .pipe(concat('styles.css'))
	     .pipe(cssMin())
	     .pipe(gulp.dest('./'));

});

gulp.task('scripts',function(){
    
    gulp.src([
  		 'vendor/jquery/main.js'

    	])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));

});

gulp.task('default',['css','scripts']);
