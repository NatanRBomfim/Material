let str1 = "minha primeira string";

//console.log(str1.replaceAll("i", "o"))
//console.log(str1.replace(/i/g, "o"))
console.log(str1.replace("i", "o"));

console.log(str1.includes("minha"));
console.log(str1.indexOf("minha"));
console.log(str1.indexOf("minha") >= 0);
console.log(str1.lastIndexOf("i"));

console.log(str1.slice(1, 7));
console.log(str1.substring(7, 1));

let strAsObj = new String("Objeto string");

console.log(strAsObj);
console.log(strAsObj.valueOf());
console.log(strAsObj.toString());
console.log("------------");
str1 = "    " + str1 + "      ";
console.log(str1);
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());

str1 = "olaaa";

console.log(str1.padStart(10, "*"));
console.log(str1.padEnd(6, "*"));
console.log(str1);

let telefone = "45357-9645";

function maskPhone(number) {
  let indice = number.indexOf("-");
  let numeroInicio = number.slice(0, indice);
  let numeroFinal = number.slice(indice + 1);
  let numeroFinalCut = numeroFinal.slice(-2);

  return `${numeroInicio[0].padEnd(
    numeroInicio.length,
    "*"
  )}-${numeroFinalCut.padStart(numeroFinal.length, "*")}`;
}

console.log(maskPhone(telefone));
