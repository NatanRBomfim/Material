let arr = [3, 2, 1, 5, 6]
//console.log(arr.reverse())

let soma = arr.reduce(function (acumulador, atual, i) {
    console.log("i: ", i)
    console.log("Acumulador --- ", acumulador,"Atual --- ", atual)
    return acumulador + atual

}, 0)

console.log("Total:", soma)


const nomes = ["Natan", "Marcos", "Junior", "Nicolas"]

let nomesOrdem = nomes.reduce(function (nomes, nomesAtual) {
    let primeiraLetra = nomesAtual[0]
    
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }
    else{
        nomes[primeiraLetra] = 1
    }
       
    return nomes

}, {})

console.log(nomesOrdem)

const numeros = [1, 2 ,3 ,4 ,2 ,5 ,6 ,3]

let apenasUnicos = numeros.reduce(function (n , nAtual){
   if(n.indexOf(nAtual) < 0 ){
    n.push(nAtual)
   }

   return n

}, [])

console.log(apenasUnicos)