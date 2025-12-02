(function () {
  class Produto {
    #itensEstoque;
    #contador;
    constructor(nome, itensEstoque) {
      this.nome = nome;
      this.#contador = 0;

      if (typeof itensEstoque === "number" && itensEstoque > 0) {
        this.#itensEstoque = itensEstoque;
      } else {
        this.#itensEstoque = 0;
      }
    }

    comprar(quantidade) {
      if (!(quantidade > 0 && typeof quantidade === "number")) {
        throw new Error("Quantidade insuficiente");
      }
      if (quantidade > this.#itensEstoque) {
        throw new Error("Numero minimo excedido");
      }

      this.#contador += 1;
      this.#itensEstoque -= quantidade;
    }

    adicionarEstoque(quantidade) {
      if (quantidade > 0 && typeof quantidade === "number") {
        this.#itensEstoque += quantidade;
      } else {
        console.log("Quantidade invalida");
      }
    }

    get itensEstoque() {
      return `Estoque: ${this.#itensEstoque} Contador: ${this.#contador}`;
    }
  }

  let caderno = new Produto("caderno", 5);
  let lapiz = new Produto("lapiz");

  caderno.comprar(1);
  caderno.adicionarEstoque(6);
  caderno.comprar(3);
  console.log(caderno.itensEstoque);
  caderno.comprar(7);
  console.log(caderno.itensEstoque);
  console.log(lapiz.itensEstoque);

})();
