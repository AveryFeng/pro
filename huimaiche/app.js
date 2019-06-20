const express=require('express');
const bodyParser=require("body-parser")
//引入路由
const addRouter=require("./router/add.js")
//1.创建服务器
var server=express();
server.use(bodyParser.urlencoded({
	extended:false
}))
//2.创建监听接口
server.listen(8080);
	//console.log(1);
//静态文件资源托管
server.use(express.static("public"));
//创建接口
//挂载路由器
server.use('/car',addRouter);