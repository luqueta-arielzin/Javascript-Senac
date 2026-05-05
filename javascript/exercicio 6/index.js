function somar() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let resultado = document.getElementById("resultado");


    if (valor1 == "" || valor2 == "") {
        resultado.innerHTML = "Preencha os dois valores"
        resultado.style.color = "red"
        return
    }

    let num1 = Number(valor1)
    let num2 = Number(valor2)

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "Digite apenas números válidos"
        resultado.style.color = "red"
        return
    }

    let soma = num1 + num2


    resultado.innerHTML = "Resultado " + "é " + soma
    resultado.style.color = "purple"
}


function subtração() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let resultado = document.getElementById("resultado");


    if (valor1 == "" || valor2 == "") {
        resultado.innerHTML = "Preencha os dois valores"
        resultado.style.color = "red"
        return
    }

    let num1 = Number(valor1)
    let num2 = Number(valor2)

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "Digite apenas números válidos"
        resultado.style.color = "red"
        return
    }

    let subtração = num1 - num2


    resultado.innerHTML = "Resultado " + "é " + subtração
    resultado.style.color = "purple"
}

function Multiplicação() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let resultado = document.getElementById("resultado");


    if (valor1 == "" || valor2 == "") {
        resultado.innerHTML = "Preencha os dois valores"
        resultado.style.color = "red"
        return
    }

    let num1 = Number(valor1)
    let num2 = Number(valor2)

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "Digite apenas números válidos"
        resultado.style.color = "red"
        return
    }

    let Multiplicação = num1 * num2


    resultado.innerHTML = "Resultado " + "é " + Multiplicação
    resultado.style.color = "purple"
}

function Divisão() {
    let valor1 = document.getElementById("valor1").value
    let valor2 = document.getElementById("valor2").value
    let resultado = document.getElementById("resultado");


    if (valor1 == "" || valor2 == "") {
        resultado.innerHTML = "Preencha os dois valores"
        resultado.style.color = "red"
        return
    }

    let num1 = Number(valor1)
    let num2 = Number(valor2)

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = "Digite apenas números válidos"
        resultado.style.color = "red"
        return
    }

    let divisão = num1 / num2


    resultado.innerHTML = "Resultado " + "é " + divisão
    resultado.style.color = "purple"
}