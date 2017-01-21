class AcmeDB {
  constructor({ users }){
    //dry this out by using the addUser function
    for (var i = 0; i < users.length; i++){
      this.users = [{name: users[i].name, id: i + 1}];
    }
  }

  addUser(user){
   var max = 0;
   //good logic.. but use reduce
   this.users.forEach(function(user){
      if (max < user.id){
        max = user.id;
      }
    });

    user.id = max + 1;
    this.users.push(user);
  }

  showUsers (){
    //use the map function to pull out the names, then join
    var str = "";
    this.users.forEach(function(item){
      str += item.name + " ";
    })
    return str.substring(0,str.length - 1);
  }

  findById (id){
    //if you want to exit early out of foreEach.. then maybe just use basic for loop
    //filter could also work here as well.
    var person = "";//i don't think you have to assign anything here. also use let
    this.users.forEach(function(item){
      if (item.id === id){
        person = item;
      }
    })
    return person;
  }

  removeUserById (id){
    //might just be easier to use filter
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
    //map works well here.. just replace the user with the passed in user if the id's match...
    var index = 0;
    for (var i = 0; i < this.users.length; i++){
      if (this.users[i].id === user.id){
        index = i;
        break;
      }
    }
    this.users[index].name = user.name;//what if there were other properties which were being modified here..
  }
}

export default AcmeDB;
