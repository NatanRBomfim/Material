function teste(str, n) {
  console.log(this.name);
  console.log(str, n);
}

teste.call({ name: "Natan" }, "string", 20);
teste.apply({ name: "Natan" }, ["string", 20]);
teste.call({ name: "Natan" }, ...["string", 20]);

const teste2 = teste.bind({ name: "Miguel" });

teste2("Joaquina", 20);

teste("natan", 20)
