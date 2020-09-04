// 每次调用$.get()或$.post()或$.ajax()的时候，会先调用ajaxprefiter这个函数
// 这个函数中，可以拿到我们Ajax提供的配置对象
$.ajaxprefilter(function (options) {
    // 全局统一挂载complete回调函数
    options.complete = function (res) {
        
    }
    options.url = 'http://ajax.frontend.itheima.net' + options
    .url
})