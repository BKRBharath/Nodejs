userlist=[];
function reg(user){
    var ind=userlist.findIndex(u=>u.username==user.username);
    if(ind!=-1){
        res.end("user already existed")
    }
    else{
        userlist.push(user)
        return "user added successfully"
    }
}


function login(uname,password){
    let ind = userlist.findIndex(u=>u.useername==uname && u.password==password);
    if(id!=-1){
        res.end("login success")
    }
    else{
        res.end("login failed")
    }
}

exports.reg=reg;
exports.login=login;
