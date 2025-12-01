//ES5

function Animal() {}

Animal.prototype.whoAmI = function () {
  return this;
};

Animal.categoria = "ser vivo";

let dog = new Animal();

console.log(dog.categoria);
console.log(Animal.categoria);

//#ES6

class Cachorro {
  constructor(nome) {
    if (nome) {
      this.nome = nome;
    }
  }
  static comer() {
    console.log("comendo");
    this.beber();
  }
  static beber() {
    console.log("bebendo");
  }
}

let dog2 = new Cachorro("rex");

//dog2.comer() //Não consegue acessar metodo comer, pois é um metodo estatico
Cachorro.comer();
