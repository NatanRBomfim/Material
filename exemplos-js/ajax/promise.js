console.log("inicio programa");
const promessa = new Promise((resolve, reject) => {
  setTimeout(function () {
    //resolve("mensagem aprovada");
    reject("mensagem reprovada");
  }, 1000);
});

promessa
  .then((resposta) => console.log(resposta))
  .then(() => console.log("novo then encadeado"))
  .then(() => console.log("novo then encadeado 2"))
  .catch((err) => console.log("Erro:" + err))
  .finally(() => console.log("mensagem finally"));
console.log("fim programa");
