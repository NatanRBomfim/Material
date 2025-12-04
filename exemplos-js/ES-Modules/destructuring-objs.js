const arr = [1, 2, 3];
//sem destructuring
//let n1 = arr[0];
//let n2 = arr[1];

//com destructuring
let [n1, n2] = arr;

const pessoa = { nome: "Natan", sobrenome: "Bomfim" };

//sem destructuring
//let nome = pessoa.nome
//let sobrenome = pessoa.sobrenome

//com destructuring
let { nome: name, sobrenome: sobre } = pessoa;

console.log(name, sobre);

const pessoa2 = { nome: "Natan", sobrenome: "Bomfim", idade: 24 };
let { nome: name2, ...resto } = pessoa2;

console.log(name2);
console.log(resto);
function dizOla({ nome, sobrenome }) {
  let nomeCompleto = sobrenome ? `${nome} ${sobrenome}` : nome;
  return `Ola ${nomeCompleto}, tudo bem?`;
}

console.log(dizOla({ nome: "Natan", sobrenome: "Bomfim" }));
