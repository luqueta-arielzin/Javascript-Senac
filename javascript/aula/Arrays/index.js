let nome1 = "Ana"
let nome2 = "Carlos"
let nome3 = "João"

let nomes = ["Ana", "Pedro", "Carlos", "João"]

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
let posicaocarlos

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);

if (nomes[i] == "Carlos") {
    posicaocarlos = i
}

}
console.log("posicao Carlos" + posicaocarlos);
console.log("nomes length" + nomes.length);

nomes[1] = "Camila"

console.log(nomes);

let dadosDiferentes = ["Lucas", 19, true, "Douglas"]
console.log(dadosDiferentes);