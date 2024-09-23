var http = require('http');
var usersmodule = require('./users.js');
var userModule = require('./user.js');
var user;
var mongoose = require('mongoose');


var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' })
    res.end('Hello World');
    if (req.method == "GET" && req.url == '/greet') {
        res.end("Hello user welcome to backend");
    }
    else if (req.method == "GET" && req.url == '/date') {
        res.end(new Date().toString())
    }
    else if (req.method == "GET" && req.url == '/users') {
        res.end("We will add users soon")
    }
    else if (req.method == "GET" && req.url == '/userss') {
        res.end(JSON.stringify(usersmodule.getusers()))
    }
    else if (req.method == "POST" && req.url == '/userss') {
        req.on('data', (chunk) => {
            user = JSON.parse(chunk);
        })
        req.on('end', () => {
            res.end(usersmodule.postusers(user));
        })
    }
    else if (req.method == "DELETE" && req.url.startsWith("/userss")) {
        var id = req.url.split("/")[2];
        var index = usersmodule.getusers().findIndex((user) => user.id == id);
        if (index == -1) {
            res.end("usr not found");
            return;
        }
        else {
            usersmodule.deleteuser(index);
            res.end("user deleted");
        }
    }
    else if (req.method == "PUT" && req.url.startsWith("/userss")) {
        var id = req.url.split("/")[2];
        var index = usersmodule.getusers().find((user) => user.id == id);
        if (index) {
            usersmodule.updateuser(index);
            res.end("user updated");

        }
        else {

            res.end("usr not found");
            return;
        }
    }
    else if (req.method == "POST" && req.url == "/register") {
        req.on('data', (chunck) => {
            user = JSON.parse(chunck);
        })
        req.on('end', () => {
            res.end(userModule.adduser(user));
        })
    }
    else if (req.method == "POST" && req.url == "/login") {
        req.on('data', (chunk) => {
            user = JSON.parse(chunk);
        })
        req.on('end', () => {
            res.end(userModule.login(user.username, user.password));
        })
    }

})

let port = 1234;
// to start the server
server.listen(port, () => {
    console.log(`server is running at port http://localhost:${port}`);
})

mongoose.connect('mongodb://localhost:27017/mymongodb')
    .then(() => {
        console.log("connected to db")
    })
    .catch((err) => {
        console.log(err)
    })