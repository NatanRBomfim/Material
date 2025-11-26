function criarCachorro(name) {
  let position = 0;
  return {
    name,
    latir() {
      console.log(this.name, "latiu");
    },
    andar(distancia) {
      position += distancia;
      console.log(this.name, "andou", distancia + "m");
      return this;
    },
    get position() {
      console.log("A posição de", this.name, "é", position);
      return position;
    },
  };
}

const rex = criarCachorro("rex");
rex.latir();
rex.andar(15).andar(5).andar(-20);
rex.position;
console.log(rex);
