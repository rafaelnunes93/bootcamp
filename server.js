const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine","html")

nunjucks.configure("view",{
    express:server
})

server.get("/",function(req,res){
    return res.send("Hello World");
})

server.listen(5000,function(){
    console.log("server is running");
})