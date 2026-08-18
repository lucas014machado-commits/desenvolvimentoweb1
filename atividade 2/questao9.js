const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "loja"
});

/*const produto1 = "Notebook"
const quantidade1 = 2;
const valor1 = 3500.00

const insert1 = "INSERT INTO vendas (produto, quantidade, valor) VALUES (?, ?, ?)";

conexao.query (insert1, [produto1, quantidade1, valor1], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar venda ");
        console.log(erro);
    } else {
        console.log("Venda cadastrada com sucesso");
    }

    conexao.end();
});
*/

const id = 1;
const deletar = 'DELETE FROM vendas WHERE id = ?';

conexao.query(deletar,[id], function(erro, resultado) {

    if(erro) {
        console.log("Erro ao excluir venda");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("Venda não encontrada");
    } else {
        console.log("Venda excluída com sucesso");
    }

    conexao.end();
});