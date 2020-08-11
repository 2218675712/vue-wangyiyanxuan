// 项目的中间件

let express = require('express');
let app = express();
app.all('*', function (req, res, next) {
    // 任何网址都可以访问
    res.header("Access-Control-Allow-Origin", "*");
    // 允许的请求方式
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // X-Requested-With，是普通请求，还是ajax请求
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/aa', (req, res) => {
    let _n = {
        a: '第一个接口 demo'
    }
    res.send(_n)
})

app.get('/bb', (req, res) => {
    res.send('bbb')
})

app.listen(3344, () => {
    console.log('高仿网易严选第二版，中间件，已经启动！')
    console.log('端口:3344')
})
