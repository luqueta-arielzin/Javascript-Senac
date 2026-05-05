function simular() {
    let renda = document.getElementById("renda").value
    let emprestimo = document.getElementById("emprestimo").value
    let parcela = document.getElementById("parcelas").value
    let resultado = document.getElementById("resultado")

if (renda == "" || emprestimo == "" || parcela == "") {
resultado.innerHTML = "Preencha todos os campos"
resultado.style.colr = "red"
return
}

renda = Number(renda)
emprestimo = Number(emprestimo)
parcela = Number(parcela)

let valorParcela = emprestimo / parcela

let limite = renda * 0.3

console.log("limite " + limite)



if (valorParcela <= limite) {
    resultado.innerHTML = "Empréstimo Aprovado. O valor de cada parcela ficou R$ " + valorParcela
    
resultado.style.color = "green"
} else {
    resultado.innerHTML = "Empréstimo Reprovado. O valor de cada parcela ficou R$ " + valorParcela

    resultado.style.color = "red"
}

}