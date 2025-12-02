class Carrinho {
  #produtos;
  constructor() {
    this.#produtos = [];
  }

  #obterIndice(nome) {
    const indice = this.#produtos.indexOf(nome.toLowerCase());
    console.log(`indice de ${nome}: ${indice}`);
    return indice;
  }
  adicionarProduto(prod1, ...prods) {
    let allProds = [prod1, ...prods];

    allProds.forEach((p) => {
      if (typeof p !== "string") {
        throw new Error("Permitido apenas string.");
      }
      this.#produtos.push(p.toLowerCase());
    });
  }

  removerProduto(nome) {
    if (this.#produtos.includes(nome)) {
      let produtoRmv = this.#obterIndice(nome);
      return this.#produtos.splice(produtoRmv, 1);
    }
  }

  get produtos() {
    return [...this.#produtos];
  }
}
const carrinho = new Carrinho();

carrinho.adicionarProduto("LApis", "borracha", "caneta");
console.log(carrinho.produtos);
carrinho.adicionarProduto("caderno", "tesoura");
console.log(carrinho.produtos);
carrinho.removerProduto("lapis");
console.log(carrinho.produtos);
carrinho.removerProduto("caderno");
console.log(carrinho.produtos);
