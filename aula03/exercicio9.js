const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "quest",
   
});

function cadastrarTarefa() {
    const descricao = readline.question("Digite a descrição da tarefa: ");
    const responsavel = readline.question("Digite o responsável pela tarefa: ");

    if (descricao.trim() === "") {
        console.log("Erro: A descrição da tarefa não pode ser vazia.");
        menu();
        return;
    }

    const insert = "INSERT INTO tarefas (descricao, responsavel) VALUES (?, ?)";
    conexao.query(insert, [descricao, responsavel], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar tarefa. ");
            console.log(erro)
        } else {
            console.log("Tarefa cadastrada com sucesso. ");
        }
        menu();
    });
}

function excluirTarefa() {
    const id = readline.questionInt("Digite o ID da tarefa: ");

    const deletar = "DELETE FROM tarefas WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir tarefa.");

        } else if (resultado.affectedRows === 0) {
            console.log("Tarefa nao encontrada.");
        } else {
            console.log("Tarefa excluída com sucesso");
        }
        menu();
    });
}

function listarTarefas() {
    const sql = "SELECT * FROM tarefas";

    conexao.query(sql, function(erro, tarefas) {
        
        if(erro) {
            console.log("Erro ao buscar tarefas: ");
        } else {

            console.log("\n--- TAREFAS ---");

            tarefas.forEach(function (tarefa) {
                console.log(
                    tarefa.id + " - " +
                    tarefa.descricao + " - " +
                    tarefa.responsavel
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar tarefa");
    console.log("2 - Excluir tarefa");
    console.log("3 - Listar tarefas");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarTarefa();

    } else if (opcao === 2) {

        excluirTarefa();

    } else if (opcao === 3) {

        listarTarefas();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();