function formatarNome(nomeCompleto) {
  nomeCompleto = nomeCompleto.trim()
  let primeiroNome = nomeCompleto;

  let espaco = primeiroNome.indexOf(" ");

  if (espaco > 0) {
    primeiroNome = primeiroNome.slice(0, espaco);
    let segundoNome = nomeCompleto;
    segundoNome = segundoNome.slice(espaco + 1);
    return `${segundoNome}, ${primeiroNome}` 
  }
  return primeiroNome;
}

console.log(formatarNome("  natan"));
console.log(formatarNome("natan ribeiro do bomfim"));
console.log(formatarNome("natan bomfim"));


