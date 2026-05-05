
function gerar() {
let limite = Number(document.getElementById("limite").value)
let resultado = document.getElementById("resultado");

if (isNaN(limite) || limite <= 0) {
    resultado.innerHTML = "Digite um número válido"
    resultado.style.color = "red"
    return;
}

let numeros = ""
for (let i = 1; i<= limite; i++) {
    numeros += i + " , "
}
 resultado.innerHTML = numeros
}