const inputEmail = document.querySelector("#info")
const elementoFeedback = document.querySelector(".feedback")
const edit = document.querySelector("#edit")

function enviarEmail() {
    let email = inputEmail.value
    if (email === "") {
        elementoFeedback.innerHTML = `<p>Precisa informar um email</p>`
    }
    else { elementoFeedback.innerHTML = `<p>Email ${email} enviado para o banco de dados com sucesso!</p>` }

}

function editarEmail() {
    edit.disabled = false
    edit.focus()
}

function emailDisabled() {
    edit.disabled = true
}