const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");
const dialog = document.getElementById("erro-dialog");
const fecharDialogBtn = document.getElementById("fechar-dialog");

cepInput.addEventListener("input", () => {
  let getCep = cepInput.value;
  getCep = getCep.replace("-", "").trim();

  if (getCep.length === 8) {
    fetch(`https://viacep.com.br/ws/${getCep}/json/`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Erro em buscar o CEP");
        }
        return res.json();
      })
      .then((dados) => {
        if (dados.erro) {
          throw Error("CEP inválido");
        }
        mostrarDado(dados);
      })
      .catch(() => mostrarModal());
  }
});

function mostrarDado(dados) {
  logradouroInput.value = dados.logradouro || "";
  bairroInput.value = dados.bairro || "";
  localidadeInput.value = dados.localidade || "";
  ufInput.value = dados.uf || "";
}

function mostrarModal() {
  dialog.showModal();
}

fecharDialogBtn.addEventListener("click", function () {
  dialog.close();
  limparCampos();
});

function limparCampos() {
  logradouroInput.value = "";
  bairroInput.value = "";
  localidadeInput.value = "";
  ufInput.value = "";
}
