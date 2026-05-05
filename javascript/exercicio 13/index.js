function iniciar() {
let tempo = Number(document.getElementById("tempo").value)
let resultado = document.getElementById("resultado")

if (isNaN(tempo) || tempo <= 0) {
    resultado.innerHTML = "Digite um número válido"
    resultado.style.color = "red"
    return
}

resultado.innerHTML = tempo

let contador = setInterval(() => {
    tempo--
    resultado.innerHTML = tempo

    if (tempo == 0) {
        clearInterval(contador)
        resultado.innerHTML = "Tempo esgotado"
        
    }
}, 1000);


}