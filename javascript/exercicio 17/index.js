let produto = {
    nome: "Teclado Gamer",
    preco: 150,
    quantidade: 3,

    calcularValorTotal: function() {
        return this.preco * this.quantidade
    }
}



let total = produto.preco * produto.quantidade


console.log("Produto", produto.nome)
console.log("Preço", produto.preco)
console.log("Quantidade", produto.quantidade)
console.log("Valor Total", total)