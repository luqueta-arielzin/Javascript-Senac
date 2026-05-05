let quantidadeAlunos = Number(prompt("Quantos alunos tem na turma?"))

let notas = [];

for (let i = 0; i < quantidadeAlunos; i++) {
    let nota = Number(prompt((i + 1)))
    notas.push(nota)
}

console.log("Notas da turmas" , notas)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

let media = soma / notas.length

console.log("Média da turma", media)

let acimaMedia = 0

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        acimaMedia++;
    }
}

console.log("Quantidade de alunos acima da média", acimaMedia);
