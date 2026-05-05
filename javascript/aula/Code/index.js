 const prompt = require("prompt-sync")()

// let devoContinuar = true

// console.log("Bem vindo ao programa! Escolha uma das opções");
// while (devoContinuar) {
// const opcao = prompt("1 - Cadastrar novo nome; 0 - sair ")
// if (opcao === "1") {
// const nome = prompt("Qual é o seu nome? ")

// console.log(`O nome é ${nome}`)
// } else if (opcao === "0") {
//     devoContinuar = false
// }
// }

function calcularCorrida(distancia, tempo) {

    const taxaBase = 5;
    const valorKm = 2;
    const valorMin = 0.5;

    const total = taxaBase + (distancia * valorKm) + (tempo * valorMin)

    

    if (total > 50) { return {
        valorTotal: total,
        mensagem: "Corrida cara"
    };
} else {
    return {
        valorTotal: total,
        mensagem: "Corrida dentro do padrão"
    };
}
}


let corridas = [];

let opcao = "0";


while (opcao !== "2") {
    opcao = prompt("1 - Nova corrida ; 2 - Sair ");

if (opcao === "1") {
    let distancia = Number(prompt("Digite a distância (km): "))
    let tempo = Number(prompt("Digite o tempo (minutos): "))

    let resultado = calcularCorrida(distancia, tempo);

    corridas.push(resultado);

} else if (opcao === "2") {
    console.log("Sistema encerrado " )
} else {
    console.log("Opção inválida! ")
}
}

console.log("=== Histórico de Corridas ===");

for (let i = 0; i < corridas.length; i++) {
    console.log(
        "Corrida " + (i + 1) + "| Valor: R$ " + corridas[i].valorTotal.toFixed(2) + " | " + corridas[i].mensagem)
    
}

