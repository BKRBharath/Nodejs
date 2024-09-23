var http=require('http');
var employeeModule=require('./employee');


var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'json/text'});
    if(req.method=="GET" && req.url=="/employess"){
        res.end(JSON.stringify(employeeModule.getemployees()));   
       }
});

let port=4400;
server.listen(port,()=>{
    console.log("server is running at port"+port);
})

