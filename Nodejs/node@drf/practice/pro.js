// var http=require('http')
// var user=require('./fun.js');
// var use;

// var server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'json/text'})
// })

// if (req.method == "POST" && req.url == '/user') {
//     req.on('data', (chunk) => {
//         use = JSON.parse(chunk);
//     });
//     req.on('end', () => {
//         res.end(user.add(user));
//     });
// }




// var port=3000;
// server.listen(port,()=>{
//     console.log('server running at port number'+port)
// })
var http = require('http');
var user = require('./fun.js');
var use;

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.method == "POST" && req.url == '/user') {
        req.on('data', (chunk) => {
            use = JSON.parse(chunk);
        });
        req.on('end', () => {
            res.end(user.add(use));
        });
    }
    else if(req.method == "GET" && req.url == "/user"){
        res.end(JSON.stringify(get.user))
    }
});

var port = 3000;
server.listen(port, () => {
    console.log('server running at port number ' + port);
});
