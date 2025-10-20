const arr = [1, 5, 10, "ola", true]

const apenasNumeros = arr.some(function (el) { //every sempre vai retornar true se todos os indice da array for do tipo number.
    return typeof el === "number"  //some sempre vai verificar se pelo menos existe um tipo number para retornar true.
})

let arr1 = arr.filter(function (el, i, _arr) { //filtra apenas os indices do tipo number
    return typeof el === "number"
})

arr.forEach(function(el, i , _arr){ //aletera a visualização da saida no console.
    return console.log(el,":", i)
})

let arr2 = arr1.map(function (el, i, _arr){// pra cada numero sera multiplicado por ele mesmo.
    return el * el
})
console.log(apenasNumeros)
console.log(arr1)
console.log(arr2)
