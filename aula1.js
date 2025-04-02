const prompt = require('prompt-sync')();

//class modelo  de atributo e funcoes para criação de um objeto
class Cliente {
    nome; // Atributo
    idade;
    cpf;
    agencia;

}

// ojeto   que possui as informações da classe de forma de indvidual
let cliente = new Cliente();

cliente.nome= prompt("Digite o nome do  cliente: ");
cliente.idade = 20;
cliente.cpf = "999.999.999-01"
cliente.agencia = 101010;


console.log(cliente);