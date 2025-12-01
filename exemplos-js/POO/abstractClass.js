class Animal {
  constructor(tipo) {
    if (this.constructor === Animal) {
      throw new Error("Animal is an abstract Class");
    }
    if (tipo) {
      this.tipo = tipo;
    }
  }
  comer() {
    throw new Error("Must be implemented 'comer()' method");
  }
}

class Gato extends Animal {
  constructor(nome) {
    super("mamifero");
    this.nome = nome;
  }
  comer() {
    console.log(`${this.nome} do tipo ${this.tipo} está comendo`);
    
  }
}

let cat = new Gato("cat");
cat.comer();
