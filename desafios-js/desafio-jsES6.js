function sum() {
    let soma = [...arguments]
    return soma.reduce(function (n, numeroAtual) {
        return n + numeroAtual
    }, 0)
}

function avarage() {
    return sum(...arguments) / arguments.length
}

let soma = sum(1, 2, 3)
let media = avarage(1, 5, 3)
console.log("Media da array:", media)
console.log("Total da array:", soma)