const mysql=require("mysql");
const express=require("express")
const app=express();
const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"world",
})
connection.connect((err)=>{
   if(err){
    console.log(err)
   }
   console.log('conneted fo the MySql server')
})

app.get('/',function(req,res){
    connection.query('Select * from post',(err,data)=>{
       res.send(data)  
    })
})
app.get('/news/:id',function(req,res){
    connection.query('Select * from post where id =',+req.params.id,(err,data)=>{
       res.send(data)  
    })
})

app.listen(2000,function(err){
    if(err){
        console.log(err)
    }
    console.log('successe ful server')
})