let temIngresso = false
let temNomeNaLista = true

if (temIngresso || temNomeNaLista) {
    console.log("Entrada permitida")
} else {
    console.log("Entrada negada")
}

let ehAdmin = false
let ehSuporte = false
let ehDesenvolvedor = true

if (ehAdmin || ehSuporte || ehDesenvolvedor)
{
    console.log("Acesso autorizado")
} else {
    console.log("Acesso negado")
}