//FUNCTION

const cachorroProto = {
  latir() {
    console.log(this.name, "latiu");
  },
  andar(distancia) {
    this.position += distancia;
    console.log(this.name, "andou", distancia + "m");
  },
};
function criarCachorro(name) {
  let position = 0;
  const obj = {
    name,
    get position() {
      console.log("A posição atual de", this.name, "é", position);
      return position;
    },
    set position(newPosition) {
      position = newPosition;
      console.log("A nova posição de", this.name, "é", position);
    },
  };

  Object.setPrototypeOf(obj, cachorroProto);

  return obj;
}

let cacho = criarCachorro("cacho");
cacho.latir();
cacho.andar(15);
cacho.andar(25);

//ES5
function Animal(tipo) {
  if (this instanceof Animal) {
    if (tipo) {
      this.tipo = tipo;
    }
  } else {
    throw new Error("Animal must be created with new operator");
  }
}

Animal.prototype.obterTipo = function () {
  return this.tipo;
};

Animal.prototype.tipo = "desconhecido";

function Cachorro(nome) {
  this.nome = nome;
  Animal.call(this, "mamifero");
}

Cachorro.prototype = new Animal("mamifero");
Cachorro.prototype.constructor = Cachorro;

const rex = new Cachorro("rex");
console.log(rex);

//ES6
class AnimalC {
  constructor(tipo) {
    if (tipo) {
      this.tipo = tipo;
    }
  }

  obterTipo() {
    return this.tipo;
  }
}

class GatoC extends AnimalC {
  constructor(nome) {
    super("mamifero");
    this.nome = nome;
  }
}

AnimalC.prototype.tipo = "desconhecido";

let leao = new AnimalC("carnivoro");
let aquiles = new GatoC("aquiles");

console.log(aquiles.obterTipo());

console.log(leao.obterTipo());
