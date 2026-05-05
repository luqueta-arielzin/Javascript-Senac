let valorCompra = 1000
let desconto
if (valorCompra > 500) {
    desconto = 0.20 // 20%
} else if (valorCompra >= 200) {
    desconto = 0.10 // 10%
} else {
    desconto = 0.05 // 5%
}

let valorDesconto = valorCompra * desconto
let valorFinal = valorCompra - valorDesconto

console.log(valorCompra.toFixed(2))
console.log(desconto * 100)
console.log(valorFinal.toFixed(2))
