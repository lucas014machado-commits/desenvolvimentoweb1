const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "loja",
   
});


function cadastrarProduto() {
    const nome = readline.question("Digite o nome do produto: ");
    const preco = readline.questionFloat("Digite o preco do produto: ");
    const quantidade = readline.questionInt("Digite a quantidade do produto em estoque: ");

    const insert = "INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)";
    conexao.query(insert, [nome, preco, quantidade], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar produto. ");
            console.log(erro)
        } else {
            console.log("Produto cadastrado com sucesso. ");
        }
        menu();
    });
}

function excluirProduto() {
    const id = readline.questionInt("Digite o ID do produto: ");

    const deletar = "DELETE FROM produtos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console .log("Erro ao excluir o produto.");

        } else if (resultado.affectedRows === 0) {
            console.log("Produto nao encontrado.");
        } else {
            console.log("Produto excluído com sucesso");
        }
        menu();
    });
}

function listarProdutos() {

    const sql = "SELECT * FROM produtos";

    conexao.query(sql, function(erro, produtos){
        
        if(erro) {
            console.log("Erro ao buscar produtos: ");
        } else {

            console.log("\n--- PRODUTOS ---");

            produtos.forEach(function (produto) {
                console.log(
                    produto.id + " - " +
                    produto.nome + " - " +
                    produto.preco + " - " +
                    produto.quantidade
                )
            });
        }
        menu();
    });
}


function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar produto");
    console.log("2 - Excluir produto");
    console.log("3 - Listar produtos");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarProduto();

    } else if (opcao === 2) {

        excluirProduto();

    } else if (opcao === 3) {

        listarProdutos();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();

