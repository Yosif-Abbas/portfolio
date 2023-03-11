// list dependences
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-code');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');

// create functions

// sass
function compilescss() {
  return src('sass/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest('/dist/css'));
}

// js

function jsmin() {
  return src('script/*.js').pipe(terser()).pipe(dest('/dist/js'));
}

// images

function optimizeing() {
  return src('images/*.{jpg,png}')
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 2 }),
      ])
    )
    .pipe(dest('dist/images'));
}

// webp images

function webpImage() {
  return src('dist/images/*.{jpg,png}')
    .pipe(imagewebp())
    .pipe(dest('dist/images'));
}

// create watchTask

function watchTask() {
  watch('sass/*.scss', compilescss);
  watch('script/*.js', jsmin);
  watch('images/*.{jpg,png}', optimizeing);
  watch('dist/images/*.{jpg,png}', webpImage);
}

// default gulp

exports.default = series(compilescss, jsmin, optimizeing, webpImage, watchTask);
