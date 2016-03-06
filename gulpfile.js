var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

var libs = [

]

var paths = {
    npm: './node_modules/',
    lib: './lib/'
};

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('bundle-css', function () {
    return gulp.src(["wwwroot/**/*.css"])
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task("bundle-js", function () {
    return gulp.src('wwwroot/bootstrap.ts')
    .pipe(webpack({
        resolve: {
            extensions: ["", ".js", ".ts"]
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                },
                {
                    test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                }
            ]
        }
    }))
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.ts', './wwwroot/**/*.html', './wwwroot/**/*.css'
    ], ['bundle-css', 'bundle-js']);
});

gulp.task('default', ['bundle-css', 'bundle-js', 'watch']);