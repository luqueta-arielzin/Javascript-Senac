// for (let i = 5; i<=50; i+=5) {
//     console.log(i)
// }

 let soma = 0
 let numero

 do {
     numero = Number(prompt("Digite um número 0 para parar"))

 if(!isNaN(numero)) {
     soma += numero
 } else {
    alert("Digite um número válido")
}

 } while (numero !== 0)

 alert("Soma total" + soma)


