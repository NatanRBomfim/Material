
function miar(){
    console.log(this.name + " miau")
}

const cat = {
    name: "max",
    falar() {
     miar.call(this)   
    }
}
const dog = {
  name: "Thor",
  falar() {
    console.log(this.name + " au au");
  },
  //falar: function falar(){
  // console.log(this.name + " au au")
  //}
};

dog.falar();
cat.falar()
