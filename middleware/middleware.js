// 项目的中间件
/*
* 本意，是要在这个中间件里去操作mysql的crud的，
* 但是，现在我们还没有mysql，
* 所以，我们在这里写一些假数据，
* 用于模拟搜索过程，这只是一个思路，
* 并不是真实生产开发环境中的搜索过程，
* 因为真实的生产环境，它的后台的搜索功能，
* 是由什么java,.net负责的
*/
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

// get请求用query
app.get('/search', (req, res) => {
    // 临时商品，先把流程走通
    let _tempGoods = [{
        name: '好看的男装',
        price: 99
    }, {
        name: '美丽的女装',
        price: 44
    }, {
        name: '可爱的童装',
        price: 55
    }, {
        name: '干活的工作服',
        price: 66
    }];
    let _searchKey = req.query.search_key;
    let _filterGoods = _tempGoods.filter(n => {
        return n.name.indexOf(_searchKey) !== -1
    })
    // 因为filter只返回结果为true的
    let resultObj = _filterGoods.length > 0 ? _filterGoods : {msg: '没有找到结果'}

    res.send(resultObj)
})
app.get('/get_tabBtn_list', (req, res) => {
    let _d = ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运行旅行', '数码家电', '全球特色'];
    res.send(_d);
});
app.get('/get_swipe_img', (req, res) => {
    let _n = [
        'https://yanxuan.nosdn.127.net/43166261d4a7bba00b94739e71f75afb.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/704515354b05480b4f6ef5ccd29c5778.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/4b0e7635a97f1c3a93dbf52c01c331dc.jpeg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/0c2be1c0c4f5a73e67b2bab5d010ebd0.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    ]
    res.send(_n)
})
app.listen(3344, () => {
    console.log('高仿网易严选第二版，中间件，已经启动！')
    console.log('端口:3344')
})
