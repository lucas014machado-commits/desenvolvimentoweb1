const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecommerce"
});

const nome = "teclado";
const preco = 120.00;

const insert = "INSERT INTO produtos(nome, preco) VALUES (?, ?)";

conexao.query(insert, [nome, preco], function(erro) {

    if (erro) {
        console.log("Erro ao cadastrar produto");
        console.log(erro);
    } else {
        console.log("Cadastro com sucesso");
    }

    conexao.end();
});



const id = 4;
const deletar = 'DELETE FROM produtos WHERE id = ?';
conexao.query(deletar,[id], function(erro, resultado) {

    if(erro) {
        console.log("Erro ao excluir o produto.");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("produto não encontrado");
    } else{
        console.log("produto excluido com sucesso!");
    }

    conexao.end();
});
