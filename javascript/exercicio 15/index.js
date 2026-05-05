let quantidade = Number(prompt("Quantas despesas você deseja registrar?"))

function registrarDespesas(quantidade) {
    let despesas = []

    for (let i = 0; i < quantidade; i++) {
        let valor = Number(prompt((i + 1) + "Digite o valor da despesa " ))
        despesas.push(valor)
    }
    return despesas
}

function analisarDespesas(despesas) {
    let total = 0
    let maior = despesas[0]
    let maioresQue100 = 0

    for (let i = 0; i < despesas.length; i++) {
        total += despesas[i];
        if (despesas[i] > maior) {
            maior = despesas[i]
        }

        if (despesas[i] > 100) {
            maioresQue100++;
        }

    }

    console.log("Despesas registradas: ", despesas);
    console.log("Total gasto ", total);
    console.log("Maior despesa ", maior);
    console.log("Quantidade de despesas maiores que 100 ", maioresQue100);
}

let despesas = registrarDespesas(quantidade) 
analisarDespesas(despesas)
