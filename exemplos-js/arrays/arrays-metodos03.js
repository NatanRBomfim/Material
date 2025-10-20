const arr = [1,2,3]
const arr2 = [4,5,6]

const arrOriginal = [1,2,3,4,5]
const arrCopiaOriginal = [].concat(arrOriginal, ["ola","Mundo"])

console.log(arr.toString())
console.log(arr.join("-"))
console.log(arr.concat(arr2))
console.log(arrCopiaOriginal)
