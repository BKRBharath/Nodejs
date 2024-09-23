var http=require("http");
var us=require('./u.js')
var user;

var server=http.createServer('/',(req,res)=>{
    res.writeHead(200,{'Content-Type':'json/text'})
})

if(req.method=="POST" && req.url=="/register"){
    req.on("data",(chunk)=>{
        user=JSON.parse(chunk);
        
    })
    req.on('end',()=>{
        res.end(us.reg(user))
    })
}
else if(req.method=="POST" && req.url=="/login"){
    req.on("data",(chunk)=>{
        user=JSON.parse(chunk);
    })
    req.on('end',()=>{
        res.end(us.login(uname,password))
    })
}


var port =1111;
server.listen(port,()=>{
    console.log(`server is runnng at http://locahost:1111${port}`)
})