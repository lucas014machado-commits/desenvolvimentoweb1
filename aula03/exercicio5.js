const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cadastro",
   
});

function cadastrarCliente() {
    const nome = readline.question("Digite o nome do cliente: ");
    const telefone = readline.question("Digite o telefone do cliente: ");

    const insert = "INSERT INTO clientes (nome, telefone) VALUES (?, ?)";
    conexao.query(insert, [nome, telefone], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar cliente. ");
            console.log(erro)
        } else {
            console.log("Cliente cadastrado com sucesso. ");
        }
        menu();
    });
}

function alterarCliente() {
    const id = readline.question("Digite o id do cliente que deseja alterar ");
    const nome = readline.question("Digite o nome do cliente que deseja alterar ");
    const telefone = readline.question("Digite o telefone do cliente que deseja alterar ");

    const update = `
        UPDATE clientes
        SET nome = ?, telefone = ?
        WHERE id = ?
        `;

    conexao.query(update,[nome, telefone, id], function (erro, resultado) {
            if (erro) {
                console.log("Erro ao atualizar cliente ");
                console.log(erro);
            } else if (resultado.affectedRows === 0) {
                console.log("Cliente não encontrado ");

            } else {
                console.log("Cliente atualizado com sucesso ");
            }
        menu();    
    });
 }

function excluirCliente() {
    const id = readline.questionInt("Digite o ID do cliente: ");

    const deletar = "DELETE FROM clientes WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir o cliente.");

        } else if (resultado.affectedRows === 0) {
            console.log("Cliente nao encontrado.");
        } else {
            console.log("Cliente excluído com sucesso");
        }
        menu();
    });
}

function listarClientes() {
    const sql = "SELECT * FROM clientes";

    conexao.query(sql, function(erro, clientes) {
        
        if(erro) {
            console.log("Erro ao buscar clientes: ");
        } else {

            console.log("\n--- CLIENTES ---");

            clientes.forEach(function (cliente) {
                console.log(
                    cliente.id + " - " +
                    cliente.nome + " - " +
                    cliente.telefone
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Alterar cliente");
    console.log("3 - Excluir cliente");
    console.log("4 - Listar clientes");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarCliente();

    } else if (opcao === 2) {

        alterarCliente();

    } else if (opcao === 3) {
        
        excluirCliente();

    } else if (opcao === 4) {

        listarClientes();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();