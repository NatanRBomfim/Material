const arr = [1,10,20]

//Pega o valor da array e transforma e uma variavel.
const [n1, , n2] = arr
console.log(n1)
console.log(n2)


//Loop para arrays
for(n of arr){
    console.log("n:",n)
}