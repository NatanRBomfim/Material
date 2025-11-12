let numbers = 1234456.634;

console.log(numbers.toFixed(2));
console.log(numbers.toFixed(4));

console.log(numbers.toPrecision(4));
console.log(numbers.toPrecision(7));

console.log(numbers.toExponential(2));
console.log(numbers.toExponential(1));

console.log(numbers.toString(2));
console.log((1).toString(2));
console.log((2).toString(2));
console.log((3).toString(2));
console.log((4).toString(2));
console.log((14).toString(16));
console.log((15).toString(16));
console.log((16).toString(16));
console.log((26).toString(16));

console.log(numbers.toLocaleString());
console.log(
  numbers.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
console.log(
  numbers.toLocaleString("pt-PT", { style: "currency", currency: "EUR" })
);

console.log(
  numbers.toLocaleString("en-EN", { style: "currency", currency: "USD" })
);

