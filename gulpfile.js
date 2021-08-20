const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),

    pug = require('gulp-pug'),
    htmlmin = require('gulp-htmlmin'),
    
    
    sass = require('gulp-sass')(require('sass')),
    postcss = require('gulp-postcss'),

    concat = require('gulp-concat'),

    del = require('del'),
    bs = require('browser-sync'),

    { path, configs } = require('./config.js');

function html(){
    return gulp.src(path.src.pug)
        .pipe(pug())
        .pipe(htmlmin())
        .pipe(gulp.dest(path.build.html))
}

function styles() {
    const postcssConfig = require(configs.postcss)
    return gulp.src(path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(postcssConfig))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
}

function js(){
  return gulp.src(path.src.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.build.js));
}

function clear(){
    return del(path.clear);
}

function clearAssets(){
        del(path.build.assets);
}

function assets(){
    return gulp.src(path.src.assets, {allowEmpty: true})
        .pipe(gulp.dest(path.build.assets));
}


function browserSync() {
    bs.init({
        server: path.distFolder,
        port: 3000,
        notify: false
    })
}

function watchFiles() {
    gulp.watch(path.watch.pug, gulp.series(html, styles)).on('change', bs.reload);
    gulp.watch(path.watch.styles, styles).on('change', bs.reload);
    gulp.watch(path.watch.js, js).on('change', bs.reload);
    gulp.watch(path.watch.assets, gulp.series(clearAssets, assets)).on('add', bs.reload).on('unlink', bs.reload);
}

const build = gulp.series(clear, html, styles, js, assets);
const serve = gulp.parallel(watchFiles, browserSync);

exports.build = build;
exports.serve = gulp.series(build, serve);
exports.clear = clear;
