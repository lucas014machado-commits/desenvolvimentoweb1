const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "colecao",
   
});

function cadastrarFilme() {
    const titulo = readline.question("Digite o titulo do filme: ");
    const ano = readline.questionInt("Digite o ano do filme: ");

    const insert = "INSERT INTO filmes (titulo, ano) VALUES (?, ?)";
    conexao.query(insert, [titulo, ano], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar filme. ");
            console.log(erro)
        } else {
            console.log("Filme cadastrado com sucesso. ");
        }
        menu();
    });
}

function alterarFilme() {
    const id = readline.question("Digite o id do filme que deseja alterar ");
    const titulo = readline.question("Digite o titulo do filme que deseja alterar ");
    const ano = readline.questionInt("Digite o ano do filme que deseja alterar ");

    const update = `
        UPDATE filmes
        SET titulo = ?, ano = ?
        WHERE id = ?
        `;

    conexao.query(update,[titulo, ano, id], function (erro, resultado) {
            if (erro) {
                console.log("Erro ao atualizar filme ");
                console.log(erro);
            } else if (resultado.affectedRows === 0) {
                console.log("Filme não encontrado ");

            } else {
                console.log("Filme atualizado com sucesso ");
            }
        menu();    
    });
 }


function excluirFilme() {
    const id = readline.questionInt("Digite o ID do filme: ");

    const deletar = "DELETE FROM filmes WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir o filme.");

        } else if (resultado.affectedRows === 0) {
            console.log("Filme nao encontrado.");
        } else {
            console.log("Filme excluído com sucesso");
        }
        menu();
    });
}

function listarFilmes() {
    const sql = "SELECT * FROM filmes ORDER BY titulo ASC";

    conexao.query(sql, function(erro, filmes) {
        
        if(erro) {
            console.log("Erro ao buscar filmes: ");
        } else {

            console.log("\n---  FILMES ---");

            filmes.forEach(function (filme) {
                console.log(
                    filme.id + " - " +
                    filme.titulo + " - " +
                    filme.ano
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar filme");
    console.log("2 - Alterar filme");
    console.log("3 - Excluir filme");
    console.log("4 - Listar filmes");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarFilme();

    } else if (opcao === 2) {

        alterarFilme();

    } else if (opcao === 3) {

        excluirFilme();

    } else if (opcao === 4) {

        listarFilmes();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();