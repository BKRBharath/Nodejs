var express=require('express');
var app=express();
var body=require('body-parser');

// var app=express();
app.use(body.json());

app.all("/",(req,res,next)=>{
    res.statusCode=200;
    res.setHead('Content-Type' , 'text/html');
    next();
})
app.get('/products',function(req,res){
    res.send("Products");
})
app.get('/home',(req,res)=>{
    res.send("<h1 style='color:black;' >Hello Bharath How Are you</h1>")
});
app.get("/about",function(req,res){
    res.send("About us");
});
app.post('/product',(req,res)=>{
    res.send(req.body.productName + " added successfully ")
});
// app.delete('/delete',(req,res)=>{
//     res.send(req.body.id) 
// }) []
const port=1823;
app.listen(port,function(){
    console.log("Server is run at port number"+port)
});
