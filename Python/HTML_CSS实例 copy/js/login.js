$(document).ready(function () {
  // 登录表单提交
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();

    // 获取用户输入
    var username = $('#username').val();
    var password = $('#password').val();

    // 这里应该是发送到服务器进行验证的代码
    // 为了演示，我们使用一个简单的判断
    if (username === "admin" && password === "password") {
      console.log('登录成功');
      window.open('../mainTest2.html', '_self');
    } else {
      console.log('登录失败');
      alert('用户名或密码错误');
    }
  });

  // ... 保留之前的其他代码 ...
});

