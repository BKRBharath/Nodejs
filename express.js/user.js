userslist=
    [
        {
          
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
    ];

    function getproducts(){
        return userslist;
    }
    function postproducts(user){
        userslist.push(user);
        return "added successfully"
    }
    function deleteproduct(ind){
        let idd=userslist.findIndex((del)=>del.id==ind)
        userslist.splice(idd,1);
        return "deleted"
    } 
    function getElementById(id){
        return userslist.filter((product)=>product.id==id);

    }
    function updateproduct(ind,newproduct){
        let uid=userslist.findIndex((upd)=>upd.id==ind)
        userslist.splice(uid,1,newproduct);
        return "updated";
    }
    function deleteall(){
        userslist.splice(0,userslist.length);
        return "deleted all"
    }

exports.getproducts=getproducts;
exports.postproducts=postproducts;
exports.deleteproduct=deleteproduct;
exports.getElementById=getElementById;
exports.updateproduct=updateproduct;
exports.deleteall=deleteall;