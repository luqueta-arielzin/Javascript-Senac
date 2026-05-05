function iniciarVotacao() {
    let qtd = Number(document.getElementById("qtdVotantes").value)

let votos = []

let votosA = 0
let votosB = 0
let votosBranco = 0

for (let i = 0; i < qtd; i++) {
    let voto = prompt("Pessoa" + (i + 1) + "vote: 1-A 2-B 3-Branco")
}

votos.push(voto)

if (voto == "1") {
    votosA++
} else if (voto == "2") {
    votosB++
} else if (voto == "3") {
    votosBranco++
}

let resultado = "Candidato A " + votosA + " votos\n"
resultado += "Candidato B " + votosB + " votos\n"
resultado += "Branco" + votosBranco + " votos\n"


if (votosA > votosB) {
    resultado += "Candidato A venceu "
} else if (votosB > votosA) {
    resultado += "Candidato B venceu "
} else {
    resultado += "Houve um empate! "
}


document.getElementById("resultado").innerText = resultado;


}