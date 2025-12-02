let classe = "cadeira";
const classePermitidas = ["mamifero", "carnivoro", "anfibio"];

const cachorro = {
  nome: "rex",

  get classe() {
    return classe;
  },

  set classe(_classe) {
    if (classePermitidas.includes(_classe)) {
      classe = _classe;
    }
  },
};

console.log(cachorro);

(function () {
  let classe = "";
  const classePermitidas = ["mamifero", "carnivoro", "anfibio"];

  const gato = {
    nome: "aquiles",

    get classe() {
      return classe;
    },

    set classe(_classe) {
      if (classePermitidas.includes(_classe)) {
        classe = _classe;
      }
    },
  };

  gato.classe = "mamifero";

  console.log(gato);
  this.gato = gato;
})();

class Animal {
  #classe;
  constructor(nome, classe) {
    this.nome = nome;
    this.#classe = classe;
  }

  get classe() {
    return this.#classe;
  }

  set classe(_classe) {
    const _classePermitidas = ["mamifero", "carnivoro", "anfibio"];
    if (_classePermitidas.includes(_classe)) {
      this.#classe = _classe;
    }
  }
}

let teste = new Animal("tart", "mamifero");

console.log(teste.nome);
teste.classe = "carnivoro"
console.log(teste.classe);
console.log(teste);
