const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "empresa",
   
});

function cadastrarFuncionario() {
    const nome = readline.question("Digite o nome do funcionário: ");
    const cargo = readline.question("Digite o cargo do funcionário: ");

    const insert = "INSERT INTO funcionarios (nome, cargo) VALUES (?, ?)";
    conexao.query(insert, [nome, cargo], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar funcionário. ");
            console.log(erro)
        } else {
            console.log("Funcionário cadastrado com sucesso. ");
        }
        menu();
    });
}

function alterarFuncionario() {
    const id = readline.question("Digite o id do funcionário que deseja alterar ");
    const nome = readline.question("Digite o nome do funcionário que deseja alterar ");
    const cargo = readline.question("Digite o cargo do funcionário que deseja alterar ");

    const update = `
        UPDATE funcionarios
        SET nome = ?, cargo = ?
        WHERE id = ?
        `;

        conexao.query(update,[nome, cargo, id], function (erro, resultado) {
            if (erro) {
                console.log("Erro ao atualizar funcionário ");
                console.log(erro);
            } else if (resultado.affectedRows === 0) {
                console.log("Funcionário não encontrado ");

            } else {
                console.log("Funcionário atualizado com sucesso ");
            }
        menu();    
    });
 }
function excluirFuncionario() {
    const id = readline.questionInt("Digite o ID do funcionário: ");

    const confirmacao = readline.question("Deseja realmente excluir este funcionario? (S/N): ");
   
    if (confirmacao.toUpperCase() === "S") {
        const deletar = "DELETE FROM funcionarios WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir o funcionário.");

        } else if (resultado.affectedRows === 0) {
            console.log("Funcionário nao encontrado.");
        } else {
            console.log("Funcionário excluído com sucesso");
        }
        menu();
    });
} else if (confirmacao.toUpperCase() === "N") {
        console.log("Exclusão cancelada pelo usuário.");
        menu();
    } else {
        console.log("Opção inválida! Digite apenas S ou N.");
        excluirFuncionario();
    }
}

function listarFuncionarios() {
    const sql = "SELECT * FROM funcionarios";

    conexao.query(sql, function(erro, funcionarios) {
        
        if(erro) {
            console.log("Erro ao buscar funcionários: ");
        } else {

            console.log("\n--- FUNCIONÁRIOS ---");

            funcionarios.forEach(function (funcionario) {
                console.log(
                    funcionario.id + " - " +
                    funcionario.nome + " - " +
                    funcionario.cargo
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar funcionário");
    console.log("2 - Alterar funcionário");
    console.log("3 - Excluir funcionário");
    console.log("4 - Listar funcionários");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarFuncionario();

    } else if (opcao === 2) {

        alterarFuncionario();

    } else if (opcao === 3) {

        excluirFuncionario();

    } else if (opcao === 4) {

        listarFuncionarios();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();