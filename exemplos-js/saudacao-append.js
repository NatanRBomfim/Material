(function () {
    const nome = "Natan"

    if (nome) {
        const novoElemento = document.createElement("div")
        novoElemento.className = "nav"
        novoElemento.innerHTML = `<p>Olá, ${nome}</p>`
        const elementoPai = document.querySelector(".hero")

        elementoPai.insertBefore(novoElemento, elementoPai.firstElementChild)
    }
    else {
        throw Error("Erro no sistema!")
    }

})()