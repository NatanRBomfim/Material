let arr = [5, 10, 15, 20]

let arr1 = arr.push(5, 49, "ola", true)
console.log(arr)
console.log(arr1)

let removeUltimo = arr.pop()
console.log(arr)
console.log(removeUltimo)

let removePrimeiro = arr.shift()
console.log(arr)
console.log(removePrimeiro)

let adicionaPrimeiro = arr.unshift(101)
console.log(adicionaPrimeiro)
console.log(arr)

let arr2 = arr.slice(2,4)
console.log(arr2)
console.log(arr)

let arr3 = arr.splice(2 , 4, "teste adicionado", 56)
console.log(arr3)
console.log(arr)