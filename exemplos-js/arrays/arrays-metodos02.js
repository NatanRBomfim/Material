let arr = [1, 5, 10, 20, 45, 70, 5]
console.log(arr.indexOf(5))
console.log(arr.lastIndexOf(5))
console.log(arr.includes(45))// indica se é true se tiver no array ou false se n tiver

console.log(arr.find(function(el){//exibe o numero que seja maior que o numero inserido
    return el > 5
}))

console.log(arr.findIndex(function(el){ // encontra o indice do elemento que é maior que o numero inserido.
    return el > 5
}))