function calcularIdadde(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();


    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade

}

let usuarios = [
    {
        nome: "Lucas",
        ativo: true,
        dataDeNascimento: new Date("2006-06-17")
    },

    {
        nome: "Rafael",
        ativo: false,
        dataDeNascimento: new Date("2005-02-20")
    },

    {
        nome: "Sophia",
        ativo: true,
        dataDeNascimento: new Date("2002-12-25")
    },

    {
        nome: "Sandra",
        ativo: true,
        dataDeNascimento: new Date("1976-07-24")
    },

    {
        nome: "Jair",
        ativo: false,
        dataDeNascimento: new Date("1974-06-20")
    }
];



for (let i = 0; i < 5; i++) {
    let nomeInput = prompt("Digite o nome do usuário: ")
    let ativoInput = prompt("Usuário está ativo? Sim/Não? ")
    let dataDeNascimentoInput = prompt("Digite a data de nascimento (YYYY-MM-DD)")
    
}


usuarios.push()



for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].idade = calcularIdadde(usuarios[i].dataDeNascimento);
}

let todos = "=== TODOS OS USUÁRIOS ===\n";

for (let i = 0; i < usuarios.length; i++) {
    let u = usuarios[i];
    todos +=
        "Nome:" + u.nome +
        "Ativo:" + u.ativo +
        "Nascimento:" + u.dataDeNascimento.toLocaleDateString() + " Idade " + u.idade + "\n";
}


alert(todos)

let ativosTexto = "=== USUÁRIOS ATIVOS ===\n";

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].ativo) {
        let u = usuarios[i];
        ativosTexto +=
            "Nome:" + u.nome +
            "Ativo:" + u.ativo +
            "Nascimento:" + u.dataDeNascimento.toLocaleDateString() + " Idade " + u.idade + "\n";
    }

}

alert(ativosTexto);

let totalAtivos = 0;

for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].ativo) {
        totalAtivos++;
    }
    
}

alert("Total de usuários ativos: " + totalAtivos);