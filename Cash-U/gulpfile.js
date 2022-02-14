var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();
var imagemin = require("gulp-imagemin");

function copy(done){

	gulp.src("./scss/**/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({
		errorLogToConsole: true,
		outputStyle: "compressed"
	}))
	.on("error", console.error.bind(console))
	.pipe(autoprefixer({
		overrideBrowserslist: ["last 20 versions"],
		cascade: false
	}))
	.pipe(rename({suffix: ".min"}))
	.pipe(sourcemaps.write("./"))
	.pipe(gulp.dest("./css/"))
	.pipe(browserSync.stream());

	done();
}

function reload(done){
	browserSync.reload();

	done();
}

function imgmin(done){
	gulp.src("./img/**")
	.pipe(imagemin({
		progressive: true,
		optimizationLevel: 5
	}))
	.pipe(gulp.dest("./img"))

	done();
}

function watchFiles(){
	gulp.watch("./scss/**/*", copy);
	gulp.watch("./**/*.html", reload);
	gulp.watch("./**/*.js", reload);
	gulp.watch("./**/*.php", reload);
}

function sync(done){
	browserSync.init({
		server: {
			baseDir: "./"
		},
		port: 3000,
		notify: false
	});

	done();
}


gulp.task("default", gulp.parallel(sync, watchFiles));
gulp.task("img", imgmin);