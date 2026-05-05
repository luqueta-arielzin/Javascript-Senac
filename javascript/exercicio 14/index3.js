let quantidadeAlunos = prompt("Quantos alunos existem na turma?")
let notas = [2, 5, 7, 10]
for (let i = 0; i < quantidadeAlunos; i++) {
    let nota = prompt("Qual a nota do aluno?")
    notas.push(nota(Number(nota)))
}

for (let i = 0; i < notas.length; i++) {
    aluno = i + 1
    console.log("Nota " + aluno + "i " + notas[i])

}


let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
    
}

let media = soma / notas.length

console.log("Valor da média das notas: " + media)

let numeroDeAlunosAcimaDaMedia = 0 

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        numeroDeAlunosAcimaDaMedia += 1
    }
}

console.log("Numero de alunos acima da média: " + numeroDeAlunosAcimaDaMedia)