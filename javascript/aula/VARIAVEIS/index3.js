function saudacao(nome, tipoUsuario, horario) {
    if (!nome || nome.trim() === "") {
        return "Nome não informado"
    }
   
   if (tipoUsuario !== "admin" && tipoUsuario !== "cliente" && tipoUsuario !== "visitante") {
    return "Tipo de usuário inválido"
   }

   if (horario < 0 || horario > 23) {
     return "Horário Inválido"
   }

let mensagemPeriodo;

if (horario >= 0 && horario <= 11) {
    mensagemPeriodo = "Bom dia"
} else if (horario >= 12 && horario <= 17) {
    mensagemPeriodo = "Boa tarde"
} else {
    mensagemPeriodo = "Boa noite "
}

let mensagemUsuario

if (tipoUsuario === "admin") {
    mensagemUsuario = "Acesso total liberado"
} else if (tipoUsuario === "cliente") {
    mensagemUsuario = "Bem vindo à plataforma"
} else {
    mensagemUsuario = "Explore nossos recursos"
}

return mensagemPeriodo + ", " + nome + "! " + mensagemUsuario + ". "


}

console.log(saudacao("Lucas", "cliente", 23))
