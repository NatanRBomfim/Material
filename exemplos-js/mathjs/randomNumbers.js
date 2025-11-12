function getNumberRandom(inicio = 0, fim = 10, integer = true) {
  let tentativas = 0;
  if (integer === true) {
    let random = Math.ceil(Math.random() * (fim - inicio + 1) + inicio);
    while (random !== fim) {
      random = Math.ceil(Math.random() * (fim - inicio + 1) + inicio);
      console.log(random);
      tentativas += 1;
    }
    return `Tentou: ${tentativas}x para chegar no ${fim}`;
  } else {
    let random = Math.random() * (fim - inicio + 1) + inicio;
    while (random !== fim) {
      random = Math.random() * (fim - inicio + 1) + inicio;
      console.log(random);
      tentativas += 1;
      if (tentativas > 10) {
        return `Não foi possivel alcançar o ${fim}`;
      }
    }
    return `Tentou: ${tentativas}x para chegar no ${fim}`;
  }
}

console.log(getNumberRandom(0, 2, false));
