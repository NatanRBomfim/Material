(function () {
    function calcularMedia() {
        let media = 0
        let soma = 0
        for (let i = 0; i < arguments.length; i++) {

            if (typeof arguments[i] === "string") {
                throw Error("Apenas numeros")
            }
            else {
                soma += arguments[i]
                media = soma / arguments.length
            }
        }
        return media || 0
    }
    console.log(calcularMedia(10, 5, 4))
})()

