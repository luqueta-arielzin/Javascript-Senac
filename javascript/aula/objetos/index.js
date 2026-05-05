let aluno = {
    nome: "João",
    idade: 20,
    aprovado: true
}

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.aprovado);

aluno.idade = 21

console.log(aluno.idade)

console.log(aluno["nome"])


aluno.curso = "Informática"

console.log(aluno.curso)

let alunoDois = {
nome: "Maria",
idade: 22,
aprovado: false,
curso: "Administração"
}

let alunos = [aluno, alunoDois]

console.log(alunos[1].nome);

for (const a of alunos) {
    console.log(`Nome ${a.nome}; Idade: ${a.idade}`);
}



