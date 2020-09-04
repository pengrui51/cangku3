getUserInfo();

function getUserInfo() {
    $.ajax({
        method: "GET",
        url: '/my/userinfo',
        // headers是请求头配置对象
        headers: {
            Authorization: localStorage.getItem('token')||''
        },
        success: function (res) {
            
        },
        complete: function (res) {
            // 在complete回调函数中，可以使用res.responseJSON拿到响应回来的数据
            if (res.responseJASON.status === 1 && res.responseJASON.message === '身份认证失败') {
                // 强制清空token
                localStorage.removeItem('token');
                // 强制跳转到登录页面
                location.href='/login.html'
            }
        }
    })
}