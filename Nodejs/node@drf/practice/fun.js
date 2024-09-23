userlist=[];
function add(user){
    var ind=userlist.findIndex((u=>u.username==user.username));

    if(ind==-1){
        userlist.push(user);
        return "user added"
    }
    else{
        return "user already existed"
    }
}
function get(){
    return userlist;
}

exports.add=add;
exports.get=get;