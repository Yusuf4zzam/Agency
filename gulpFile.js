let { src, task, dest, watch, series } = require("gulp");
let pug = require("gulp-pug");
let concat = require("gulp-concat");
let connect = require("gulp-connect");
let notify = require("gulp-notify");
let sass = require("gulp-sass")(require("sass"));
let uglify = require("gulp-uglify");
let zip = require("gulp-zip");
let autoprefixer = require("gulp-autoprefixer");

// Server Connect
task("connect", function () {
  connect.server({
    root: "dist/",
    port: 8080,
    livereload: true,
  });
});

// Html Task
task("html", function () {
  return src("project/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"))
    .pipe(connect.reload())
    .pipe(notify("HTML File Rinning"));
});

// CSS Task
task("css", function () {
  return src("project/css/style.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 version"))
    .pipe(concat("main.css"))
    .pipe(dest("dist/css"))
    .pipe(connect.reload())
    .pipe(notify("CSS File Rinning"));
});

// JS Task
task("js", function () {
  return src("project/js/script.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(connect.reload())
    .pipe(notify("JS File Rinning"));
});

// Compress Files
task("compress", function () {
  return src("dist/**/*.*").pipe(zip("zipFile.zip")).pipe(dest("."));
});

// Watch Files
task("watch", function () {
  watch("project/index.pug", series("html"));
  watch("project/css/*.scss", series("css"));
  watch("project/js/script.js", series("js"));
  watch("dist/**/*.*", series("compress"));
  watch("dist/", series("connect"));
});
