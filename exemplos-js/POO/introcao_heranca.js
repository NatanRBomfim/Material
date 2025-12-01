function Animal(tipo) {
  if (tipo) {
    this.tipo = tipo;
  }
}

Animal.prototype.obterTipo = function () {
  return this.tipo;
};

Animal.prototype.tipo = "desconhecido";

function Cachorro(nome, tipo) {
  this.nome = nome;
  Animal.call(this, tipo);
}

Cachorro.prototype = new Animal();
Cachorro.prototype.constructor = Cachorro;

const rex = new Cachorro("rex", "mamifero");
console.log(rex.constructor);
console.log(rex.__proto__);
console.log(rex.obterTipo());

for (let prop in rex) {
  if (rex.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

console.log(rex instanceof Animal);
console.log(Object.prototype.isPrototypeOf(rex));
console.log(Object.getPrototypeOf(rex));
