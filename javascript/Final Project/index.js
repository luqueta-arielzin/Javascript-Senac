const prompt = require("prompt-sync")()
const fs = require("fs")

let herois = buscarHerois()


function listarHerois() {
    if (herois.length === 0) {
        console.log("Nenhum herói encontrado. ")
        return;
    }

    console.log(" === LISTA DE HERÓIS === ");


    for (let i = 0; i < herois.length; i++) {
        console.log(` 
    Herói: ${i + 1}  
    Nome: ${herois[i].nome}   
    Classe: ${herois[i].classe}
    Nível: ${herois[i].nivel}
    Vida Atual: ${herois[i].vidaAtual}
    Vida Máxima: ${herois[i].vidaMaxima}
    Mana: ${herois[i].mana}
    Ativo: ${herois[i].ativo}
    Data de Criação: ${herois[i].dataDeCriacao}   
    ----------------------`)

    }

    prompt("Digite Enter para voltar")
}

function criarHeroi() {
    if (herois.length >= 20) {
        console.log("Limite máximo de 20 heróis atingido. ")
        prompt("Digite Enter para voltar ao menu")
        return;
    }


    let nome = prompt("Nome do herói: ");
    let classe = prompt("Classe (Guerreiro, Mago ou Arqueiro): ")
    let vidaAtual = Number(prompt("Vida Atual(máx-500): "))
    let nivel = Number(prompt("Nível(1 a 100): "))
    let mana = Number(prompt("Mana: "))
    let ativo = prompt("Ativo? (True/False): ") === "true";

    let heroi = {
        nome,
        classe,
        nivel,
        vidaAtual,
        vidaMaxima: 500, // FIXO
        mana,
        ativo,
        dataDeCriacao: new Date().toLocaleDateString() // FIXO
    }

    herois.push(heroi);
    console.log("Herói criado com sucesso!");
    salvarHerois(herois)
}

function editarHeroi() {
    if (herois.length === 0) {
        console.log("Nenhum herói para editar. ")
        return;
    }

    listarHerois();


    let indice = Number(prompt("Digite o número do herói: ")) - 1;

    if (indice < 0 || indice >= herois.length) {
        console.log("Herói inválido. ");
        return
    }

    herois[indice].nome = prompt("Novo nome: ");
    herois[indice].classe = prompt("Nova classe: ");
    herois[indice].nivel = Number(prompt("Novo nível: "));
    herois[indice].vidaAtual = Number(prompt("Nova vida atual: "));
    herois[indice].mana = Number(prompt("Nova mana: "));
    herois[indice].ativo = prompt("Ativo? (true/false): ") === "true";

    // NÃO altera vidaMaxima nem dataDeCriacao

    console.log("Herói editado com sucesso! ")
    salvarHerois(herois)
}

function excluirHeroi() {
    if (herois.length === 0) {
        console.log("Nenhum herói para excluir.")
        return
    }

    listarHerois();


    let indice = Number(prompt("Digite o número do herói: ")) - 1;

    if (indice < 0 || indice >= herois.length) {
        console.log("Herói inválido. ")
        return;
    }

    herois.splice(indice, 1);
    console.log("Herói excluído com sucesso! ");

    salvarHerois(herois)
}


function menu() {
    let opcao = "";

    while (opcao !== "5") {
        console.log(`
    === MENU HEROIS RPG ===
    1. Listar heróis
    2. Criar herói
    3. Editar herói
    4. Excluir herói
    5. Sair        
    `);

        opcao = prompt("Escolha: ");

        if (opcao === "1") {
            listarHerois();
        } else if (opcao === "2") {
            criarHeroi();
        } else if (opcao === "3") {
            editarHeroi();
        } else if (opcao === "4") {
            excluirHeroi();
        } else if (opcao === "5") {
            console.log("Encerrando o jogo... ")
        } else {
            console.log("Opção inválida.");
        }


    }
}

// VALIDAR NÍVEL (1 a 100)
function validarNivel(nivel) {
    if (nivel < 1 || nivel > 100) {
        console.log("Nível deve estar entre 1 e 100. ")
        return false;
    }
    return true;
}

// VALIDADR VIDA E MANA (não negativos e vida <= 500)

function validarVidaEMana(vidaAtual, mana) {
    if (vidaAtual < 0 || mana < 0) {
        console.log("Vida e mana não podem ser negativas. ");
        return false;
    }

    if (vidaAtual > 500) {
        console.log("Vida atual não pode ser maior que a vida máxima (500). ")
        return false;
    }
    return true;
}

// VALIDAR ÍNDICE
function validarIndice(indice) {
    if (indice < 0 || indice >= herois.length) {
        console.log("Herói inválido. ")
        return false;
    }
    return true;
}

// STATUS DO HERÓI
function calcularStatus(vidaAtual) {
    let porcentagem = (vidaAtual / 500) * 100;

    if (porcentagem > 70) {
        return "Saudável";
    } else if (porcentagem >= 30) {
        return "Ferido";
    } else {
        return "Crítico";
    }
}



function salvarHerois(listarHerois) {
    const arquivojson = JSON.stringify(listarHerois, null, 2)

    fs.writeFileSync("herois.json", arquivojson)
}

function buscarHerois() {
    try {
        const arquivojson = fs.readFileSync("herois.json", "utf-8")

        const listaherois = JSON.parse(arquivojson)

        return listaherois
    } catch (error) {
        const listaHeroisVazia = []
        salvarHerois(listaHeroisVazia)

        return listaHeroisVazia
    }

}

menu()
