class Carrinho {
  #produtos;

  constructor() {
    this.#produtos = [];
  }

  adicionarProduto(produto) {
    this.#produtos.push(produto);
  }

  get produtos() {
    return [...this.#produtos];
  }
}
const carrinho = new Carrinho();

carrinho.adicionarProduto("lapis");
carrinho.adicionarProduto("caneta");
carrinho.adicionarProduto("borracha");
console.log(carrinho.produtos);

const ref = carrinho.produtos;

ref.length = 0;
console.log(carrinho.produtos);
console.log(ref);
