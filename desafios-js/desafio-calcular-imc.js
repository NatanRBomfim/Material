function calcularImc(altura, peso, callback) {
    let alturaCalc = altura * altura
    let imc = peso / alturaCalc

    if (typeof altura === "string" || typeof peso === "string") {
        throw Error("This cannot be a string")
    }
    else if (altura === undefined || peso === undefined) {
        throw Error("It's Needs wight and height to calculate")
    }
    else if (typeof callback === "function") {
        return callback(imc)
    }
    else {
        return imc
    }

}

function classificarImc(imc) {
    if (imc <= 16.9) {
        return "Muito abaixo do peso"
    }
    else if (imc <= 18.4) {
        return "abaixo do peso"
    }

    else if (imc <= 24.9) {
        return "Peso Normal"
    }

    else if (imc <= 29.9) {
        return "Acima do peso"
    }

    else if (imc <= 34.9) {
        return "Obesidade grau I"
    }

    else if (imc <= 40) {
        return "Obesidade grau II"
    }

    else {
        return "Obesidade grau III"
    }
}

let imc = calcularImc(1.71, 66)
let imc2 = calcularImc(1.71, 66, classificarImc)
console.log(imc)
console.log(imc2)
