function Animal(tipo) {
  if (tipo) {
    this.tipo = tipo;
  }
}

Animal.prototype.obterTipo = function() {
  return this.tipo;
};

Animal.prototype.tipo = "desconhecido";

const cachorro = new Animal("mamifero");
const peixe = new Animal();

const sapo = { tipo: "anfibio" };

console.log(sapo);
console.log(cachorro);
console.log(peixe.obterTipo());

console.log(Animal.prototype.obterTipo.call(sapo));

