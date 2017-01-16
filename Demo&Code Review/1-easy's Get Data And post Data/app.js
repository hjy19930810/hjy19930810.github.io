const express = require('express')

var app = express();

var bodyparser = require('body-parser')
var fs = require('fs')
var morgan = require('morgan')

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(morgan('dev'))

app.use(express.static('./public'))

/**
 * post请求的处理
 */
app.post('/api/save_data', function (req, res) {
    // console.log(req.body);
    var arr = []

    // 读取文件
    fs.readFile('./data/data.json', function (err, data) {
        if (err) {
            console.log(err);
            console.log('json文件不存在');
        } else {
            // console.log(data.toString());
            if (data.toString()) {
                arr = JSON.parse(data.toString())
            }
        }

        arr.push(req.body)
        fs.writeFile('./data/data.json', JSON.stringify(arr))

        res.json({
            status: 'y',
            msg: '服务器响应成功'
        })
    })
})

/**
 * get请求的
 */
app.get('/api/get_data',function (req,res) { 
    fs.readFile('./data/data.json',function (err,data) { 
        var result = []
        if(err){
            console.log(err);
        }else{
            result = JSON.parse(data.toString())
        }

        res.json({
            status:'y',
            msg:'客户端数据获取成功',
            data:result
        })
     })
 })
app.listen(3001, function () {
    console.log('服务运行于3001端口');
})

