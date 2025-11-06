function formatarNome(nomeCompleto) {
  nomeCompleto = nomeCompleto.trim();
  let primeiroNome = nomeCompleto.split(" "); // transforma uma string em uma array

  if (primeiroNome.length === 1) {
    return nomeCompleto;
  }
  let segundoNome = primeiroNome.shift();
  return primeiroNome.join(" ") + "," + segundoNome;
}

console.log(formatarNome("  natan"));
console.log(formatarNome("natan ribeiro do bomfim"));
console.log(formatarNome("natan bomfim"));
