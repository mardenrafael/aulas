let meuInputLogin = document.getElementById("login");
let meuInputSenha = document.getElementById("senha");
let meuButton = document.getElementById("btn");

function enviaDadosPAraServidor() {
  console.log(meuInputLogin.value);
  console.log(meuInputSenha.value);
}

meuButton.addEventListener("click", enviaDadosPAraServidor);
