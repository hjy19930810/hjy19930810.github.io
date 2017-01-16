const express = require('express')
var app = express();

var morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.static('./public'))

app.get('/',function (req,res) { 

     if(req.url!=="/favicon.ico"){
         console.log(req.url);          
     }
    res.send('根目录下因为没有index.html，所以会显示这个res.send')
})

app.get('/api/get_data',function (req,res) {  
    
    var data = {}
    data.status = 'y'
    data.msg = '服务器响应成功'
    data.result = '我是服务器的处理结果'
    
    setTimeout(function () {
        res.json(data)
      },3000)
    
})

app.listen(3002,function () {  
    console.log('服务器运行于3002端口');
})