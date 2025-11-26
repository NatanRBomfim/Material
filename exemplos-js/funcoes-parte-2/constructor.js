function Cachorro(name) {
  let position = 0;

  this.name = name;

  this.latir = function () {
    console.log(this.name, "latiu");
  };

  this.andar = function (distancia) {
    position += distancia;
    console.log(this.name, "andou", distancia + "m");
    console.log("A posição de", this.name, "é", position);
  };
}

const rex = new Cachorro("rex")

rex.latir()
rex.andar(5)
rex.andar(15)

const toto = new Cachorro("toto")

toto.latir()
toto.andar(15)