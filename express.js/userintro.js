var express=require('express');
var app=express();
var hi=require('./user.js');
var body=require('body-parser');
var id;

app.use(body.json())
app.all('/',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('Content-Type', 'text/json');
    next();
})
app.get('/users',(req,res)=>{
    res.send(hi.getproducts());
});
app.post('/users',(req,res)=>{
    res.send(hi.postproducts(req.body));
})
app.delete('/users/:id',(req,res)=>{
     id=req.params.id;
     res.send(hi.deleteproduct(id))
})
app.put('/users/:id',(req,res)=>{
    id=req.params.id;
    res.send(hi.updateproduct(id,req.body))
})
app.delete('/users',(req,res)=>{
    res.send(hi.deleteall())
})

let port=8961;
app.listen(port,()=>{
    console.log('server running at port number ' + port);
})

