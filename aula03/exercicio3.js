const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "biblioteca",
   
});

function cadastrarLivro() {
    const titulo = readline.question("Digite o título do livro: ");
    const autor = readline.question("Digite o autor do livro: ");

    const insert = "INSERT INTO livros (titulo, autor) VALUES (?, ?)";
    conexao.query(insert, [titulo, autor], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar livro. ");
            console.log(erro)
        } else {
            console.log("Livro cadastrado com sucesso. ");
        }
        menu();
    });
}

function excluirLivro() {
    const id = readline.questionInt("Digite o ID do livro: ");

    const deletar = "DELETE FROM livros WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir o livro.");

        } else if (resultado.affectedRows === 0) {
            console.log("Livro nao encontrado.");
        } else {
            console.log("Livro excluído com sucesso");
        }
        menu();
    });
}

function listarLivros() {
    const sql = "SELECT * FROM livros";

    conexao.query(sql, function(erro, livros) {
        
        if(erro) {
            console.log("Erro ao buscar livros: ");
        } else {

            console.log("\n--- LIVROS ---");

            livros.forEach(function (livro) {
                console.log(
                    livro.id + " - " +
                    livro.titulo + " - " +
                    livro.autor
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar livro");
    console.log("2 - Excluir livro");
    console.log("3 - Listar livros");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarLivro();

    } else if (opcao === 2) {

        excluirLivro();

    } else if (opcao === 3) {

        listarLivros();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();


