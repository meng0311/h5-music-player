var gulp = require("gulp");
var less = require("gulp-less");
var connect = require("gulp-connect");    //开启测试服务器插件

//gulp 语法

// gulp.task("task1",function(){      类似于事件  中间有个可选参数[]用于添加在该任务执行前必须执行的项目 即依赖
//     console.log("111");
// })

// gulp.task("default",["task1"])     第三个参数function为可选项   该语句出发为控制台执行gulp 

gulp.task("html",function(){
    gulp.src("./src/index.html")    //以流的方式读取
        .pipe(connect.reload())
        .pipe(gulp.dest("./dist"))   //pipe为node的方法 把读取的东西输出  gulp.dest为把括号中数据整合 因gulp.src是以流的方式读取的           
}) 

gulp.task("watch",function(){
    gulp.watch("./src/index.html",["html"])});
    gulp.watch("./src/less/*.less",["less"]);
    gulp.watch("./src/js/*.js",["js"]);


gulp.task("server",function(){
    connect.server({
        livereload: true
    });           //可配参数（{root：‘./dist’   意为在该文件开启服务器   ， livereload：true  热起  配合.pipe(connect.reload()  从而达到不用刷新 )}）
})
//把less转换成css
gulp.task("less",function(){
    gulp.src("./src/less/*.less")
        .pipe(connect.reload())
        .pipe(less())    
        .pipe(gulp.dest("./dist/css/"))
});
//把src的js文件夹放到dist里
gulp.task("js",function(){
    gulp.src("./src/js/*.js")
    .pipe(connect.reload())
    .pipe(gulp.dest("./dist/js"))
})

gulp.task("default",["html","watch","server","less","js"]);