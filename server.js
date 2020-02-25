const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("view",{
    express:server
})

server.get("/",function(req,res){
    return res.render("about")
})

server.get("/portifolio",function(req,res){
    return res.render("portifolio")
})

server.listen(5000,function(){
    console.log("server is running");
})