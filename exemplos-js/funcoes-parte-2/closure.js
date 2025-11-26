const teste = (function (n) {
    //let n = 0
  return function () {
    console.log("teste interna chamada", ++n)
    return "return interno " + n
  };
})(0);

let str = teste()
teste()
teste()
let str2 = teste()
console.log(str)
console.log(str2)