// essa funcao pega o nome do inputNome e exibe na tela
function enviarNome() {
   // console.log("hello world")

    let nome = document.getElementById("inputNome").value

    console.log(nome)

    // colocar mensagem no elemento hl

    let mensagem = "Bem vindo " + nome
    document.getElementById("mensagemBoasVindas").innerHTML = mensagem
}



