var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

/** execution for sale page */
// gulp.task('sass', function () {
//   return gulp.src('./sale/template/main_template/css/main.sale.scss')
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('./sale/template/main_template/css/'));
// });

// gulp.task('hk', ['sass'], function(){
//   return gulp.src('./sale/hk/index.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('./sale/hk/'))
// });

// gulp.task('id', ['sass'], function(){
//   return gulp.src('./sale/id/index.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('./sale/id/'))
// });

// gulp.task('my', ['sass'], function(){
//   return gulp.src('./sale/my/index.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('./sale/my/'))
// });

// gulp.task('ph', ['sass'], function(){
//   return gulp.src('./sale/ph/index.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('./sale/ph/'))
// });

// gulp.task('th', ['sass'], function(){
//   return gulp.src('./sale/th/index.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('./sale/th/'))
// });

// gulp.task('sg', ['sass'], function(){
//   return gulp.src('./sale/sg/index.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('./sale/sg/'))
// });

// gulp.task('default', [ 'hk', 'id', 'my', 'ph', 'th', 'sg']);


// gulp.task('sass', function () {
//   return gulp.src('./sale/template/main_template/css/main.campaign.scss')
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('./sale/template/main_template/css/'));
// });

// gulp.task('hk', ['sass'], function(){
//   return gulp.src('./sale/th/1111/index.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('./sale/th/1111/'))
// });

gulp.task('sass', function () {
  return gulp.src('./sale/template/main_template/css/blackfriday.main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./sale/template/main_template/css/'));
});

gulp.task('hk', ['sass'], function(){
  return gulp.src('./sale/hk/blackfriday/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./sale/hk/blackfriday/'))
});

gulp.task('sg', ['sass'], function(){
  return gulp.src('./sale/sg/blackfriday/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./sale/sg/blackfriday/'))
});

gulp.task('my', ['sass'], function(){
  return gulp.src('./sale/my/blackfriday/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./sale/my/blackfriday/'))
});

gulp.task('default', [ 'hk', 'sg', 'my']);