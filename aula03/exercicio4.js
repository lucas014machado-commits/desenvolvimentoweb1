const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "games",
   
});

function cadastrarJogo() {
    const nome = readline.question("Digite o nome do jogo: ");
    const genero = readline.question("Digite o gênero do jogo: ");

    const insert = "INSERT INTO jogos (nome, genero) VALUES (?, ?)";
    conexao.query(insert, [nome, genero], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar jogo. ");
            console.log(erro)
        } else {
            console.log("Jogo cadastrado com sucesso. ");
        }
        menu();
    });
}

function excluirJogo() {
    const id = readline.questionInt("Digite o ID do jogo: ");

    const deletar = "DELETE FROM jogos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir o jogo.");

        } else if (resultado.affectedRows === 0) {
            console.log("Jogo nao encontrado.");
        } else {
            console.log("Jogo excluído com sucesso");
        }
        menu();
    });
}

function listarJogos() {
    const sql = "SELECT * FROM jogos";

    conexao.query(sql, function(erro, jogos) {
        
        if(erro) {
            console.log("Erro ao buscar jogos: ");
        } else {

            console.log("\n--- JOGOS ---");

            jogos.forEach(function (jogo) {
                console.log(
                    jogo.id + " - " +
                    jogo.nome + " - " +
                    jogo.genero
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar jogo");
    console.log("2 - Excluir jogo");
    console.log("3 - Listar jogos");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarJogo();

    } else if (opcao === 2) {

        excluirJogo();

    } else if (opcao === 3) {

        listarJogos();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();