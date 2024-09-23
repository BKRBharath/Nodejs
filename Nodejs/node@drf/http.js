var getlist=require('./product.js');
var http=require('http');
var productlist=getlist();
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    if(req.url==='/product'&&req.method==='GET'){
        res.end(JSON.stringify(productlist));
    }
    else if(req.url==='/hello'&&req.method==='GET'){
        res.end("hello abcd");
    }
    else if(req.url==='/addproducts'&&req.method==='POST'){
        let newproduct="";
        req.on('data',(hello)=>{
            newproduct+=hello;
        });
        req.on('end',()=>{
            productlist.push(JSON.parse(newproduct));
            res.end("product add");
        });
    }
    else if(req.url.startsWith('/products')&&req.method==="DELETE"){
        let eID=req.url.split("/")[2];
        let eindex=productlist.findIndex((e)=>e.productID===eID);
        if(eindex==-1){
            res.end("product not found");
        }
        else{
            productlist.splice(eindex,1);
            res.end("product remove");
        }
    }
    else if(req.url.startsWith('/products')&&req.method==='GET'){
        let eID=req.url.split("/")[2]
        let eindex=productlist.findIndex((e)=>e.productID===eID);
        if(eindex==-1){
            res.end("product not found");
        }
        else{
            res.end(JSON.stringify(productlist[eindex]));
        }
    }
    
});

port=4300;
server.listen(port,()=>{
    console.log(`server is runing at: http://localhost:${port}`);
})