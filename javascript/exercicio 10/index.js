let tentativas = 0
let login
let senha

while (tentativas < 3) {
    login = prompt("Digite o login")
    senha = Number(prompt("Digite a senha"))

if (login == "admin" && senha == "1234") {
    alert("Login realizdo")
    break
} else {
    tentativas++
    alert("Login ou senha incorretos")

    if (tentativas == 3) {
        alert("Conta bloqueada")
    }
}

}