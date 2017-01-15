class AcmeDB {
  constructor({ users }){
    for (var i = 0; i < users.length; i++){
      this.users = [{name: users[i].name, id: i + 1}];
    }
  }

  addUser(user){
   var max = 0;
   this.users.forEach(function(user){
      if (max < user.id){
        max = user.id;
      }
    });

    user.id = max + 1;
    this.users.push(user);
  }

  showUsers (){
    var str = "";
    this.users.forEach(function(item){
      str += item.name + " ";
    })
    return str.substring(0,str.length - 1);
  }

  findById (id){
    var person = "";
    this.users.forEach(function(item){
      if (item.id === id){
        person = item;
      }
    })
    return person;
  }

  removeUserById (id){
    var index = 0;
    for (var i = 0; i < this.users.length; i++){
      if (this.users[i].id === id){
        index = i;
        break;
      }
    }
    this.users.splice(index, 1);
  }

  editUser(user){
    var index = 0;
    for (var i = 0; i < this.users.length; i++){
      if (this.users[i].id === user.id){
        index = i;
        break;
      }
    }
    this.users[index].name = user.name;
  }
}

export default AcmeDB;
