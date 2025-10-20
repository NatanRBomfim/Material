(function () {
    const nome = "Natan"
    const elemento = document.querySelector("#nav p")

    if (nome) {
        elemento.textContent += nome
    }
    else{
       // elemento.parentElement.style.display = "none"
       // elemento.remove()
       const elementoParaRemover = elemento.parentElement
       elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }

})()