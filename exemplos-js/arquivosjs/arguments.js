function soma() {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

document.getElementById('output').innerHTML += `O total da soma é ${soma(1, 2, 5)}`