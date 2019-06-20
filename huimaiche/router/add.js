//引入express模块
const express=require("express");
//创建路由
const pool=require("../pool.js")
var router=express.Router();

//创建接口
router.post("/add",(req,res)=>{
	var obj=req.body;//声明变量保存接收值
	/*res.send("接收成功")*/ //检测接口
	//创建连接池,连接mysql
	pool.query("insert into car set ?",[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:1,msg:"添加成功"});
		}else 
			res.send({code:2,msg:"添加失败"})
	})
})
router.get("/list",(req,res)=>{
	var obj=req.query;
	pool.query("select * from car where tid=?",[obj.tid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send({code:404,msg:"不存在此种类型"})		
		}
	})
})
router.get("/details",(req,res)=>{
	var obj=req.query;
	pool.query("select * from car where cid=?",[obj.cid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("ID不存在")
		}
	})
})
router.get("/del",(req,res)=>{
	var obj=req.query;
	pool.query("delete from car where cid=?",[obj.cid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("删除成功");
		}else 
			res.send({code:2,msg:"添加失败"})
	})
})
//导出模块
module.exports=router;