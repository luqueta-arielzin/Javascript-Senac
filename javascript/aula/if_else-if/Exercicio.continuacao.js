function verificarLogin() {
    const nome = document.getElementById("nome").value
    const senha = document.getElementById("senha").value
    const mensagem = document.getElementById("mensagem");

if (nome == "admin" && senha == "1234") {
    mensagem.textContent = "Bem vindo administrador";
    mensagem.classList.add("correto")
} else {
    mensagem.textContent = "Usuário ou senha incorretos";
    mensagem.classList.add("erro");
}

}