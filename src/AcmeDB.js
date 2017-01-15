class AcmeDB {
  constructor({ users }){

   this.users = [
     {name: users[0].name}
    ]
    this.users[0]["id"] = this.users.length;
  }

  addUser(user){
    user.id = this.users.length + 1;
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
    return this.users[id - 1];
  }

  removeUserById (id){

  }

  editUser(){

  }
}

export default AcmeDB;
