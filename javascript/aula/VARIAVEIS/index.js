let nomeLet = "Lucas"
console.log(nomeLet)

nomeLet = "Sandra"

console.log(nomeLet)

const passoConst = {
    nome: "Lucas Ariel"
}

console.log(`passoConst.nome ${passoConst.nome}`);


// function saudacao() {
//     console.log("Olá, aluno")
// }

// saudacao()

// function saudacaoComParametros(nome, idade) {
//     console.log(`ola´, ${nome}, Você tem ${idade} anos de idade`);
// }
//  saudacaoComParametros("João", 18)
//  saudacaoComParametros("Maria", 24)
//  saudacaoComParametros("Lucas", 20)

// function soma(a, b) {
//     return a + b
// }
// const resultado = soma(10, 5)
// console.log(`resultado ${resultado}`)

function verificarIdade(idade) {

    if (idade >= 18) {
    return "Maior de idade"
    } else {
        return "Mneor de idade"
    }
}
console.log(verificarIdade(18))
