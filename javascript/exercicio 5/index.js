let botao = document.getElementById("btnVerificar")
botao.addEventListener("click", verificar);

function verificar() {
let valor = document.getElementById("numero").value
let resultado = document.getElementById("resultado")

if (valor == "") {
    resultado.innerHTML = "por favor, digite um valor"
    resultado.style.color = "red"
    return;
}

let numero = Number(valor)

if (isNaN(numero)) {
    resultado.innerHTML = "digite um número válido"
    resultado.style.color = "red"
    return;
}


if (numero % 2 == 0) {
    resultado.innerHTML = "O número " + numero + " É par"
    resultado.style.color = "green"
} else {
    resultado.innerHTML = "O número " + numero + " É ímpar"
    resultado.style.color = "blue"
}

}