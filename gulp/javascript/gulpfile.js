const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const bebel = require('gulp-babel')

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(bebel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.mim.js'))
        .pipe(gulp.dest('build'))

        return cb()
}

exports.default = series(padrao)