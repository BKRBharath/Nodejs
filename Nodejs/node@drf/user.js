var userlist=[];
function adduser(user){
    let ind=userlist.findIndex((u)=>u.username==user.username);
    if(ind!=-1){
        return "already existed"
    }
    else{
        userlist.push(user);
        return "user addedd successfully";
    }
}

function login(username,password){
    let ind=userlist.findIndex((u)=>u.username==username && u.password==password);
    // let founduser=userlist.find((u)=>u.username==username && u.password==password);
    if(ind!=-1){
        return "Login success"
    }
    else{
        return "login failed"
    }
}
// mongoose.connect('mongodb://locslhost:')
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var uschema=new Schema({
    username:String,
    password:String
});


var user=mongoose.model('node',uschema);

exports.user=user;
exports.adduser=adduser;
exports.login=login;

// 