const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "empresa"
});

/*const nome1 = "Ana Souza";
const telefone1 = "47999990000";

const insert1 = "INSERT INTO clientes(nome, telefone) VALUES (?, ?)";

conexao.query (insert1, [nome1, telefone1], function(erro) {
    
    if(erro) {
        console.log("Erro ao cadastrar Ana Souza");
        console.log(erro);
    } else {
        console.log("Ana Souza cadastrada com sucesso");
    }
});

const nome2 = "Pedro Lima";
const telefone2 = "47988880000";

const insert2 = "INSERT INTO clientes(nome, telefone) VALUES (?, ?)";

conexao.query (insert2, [nome2, telefone2], function(erro) {
    
    if(erro) {
        console.log("Erro ao cadastrar Pedro Lima");
        console.log(erro);
    } else {
        console.log("Pedro Lima cadastrado com sucesso");
    }
});

const nome3 = "Juliana Costa ";
const telefone3 = "47977770000";

const insert3 = "INSERT INTO clientes(nome, telefone) VALUES (?, ?)";

conexao.query (insert3, [nome3, telefone3], function(erro) {
    
    if(erro) {
        console.log("Erro ao cadastrar Juliana Costa ");
        console.log(erro);
    } else {
        console.log("Juliana Costa cadastrada com sucesso");
    }

    conexao.end();
});
*/

/*const id = 2;
const deletar = 'DELETE FROM clientes WHERE id = ?';

conexao.query(deletar,[id], function(erro, resultado) {

  if(erro) {
        console.log("Erro ao excluir cliente.");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("cliente não encontrado");
    } else{
        console.log("cliente excluido com sucesso!");
    }

    conexao.end();
});
*/

const id = 2;
const deletar = 'DELETE FROM clientes WHERE id = ?';

conexao.query(deletar,[id], function(erro, resultado) {

  if(erro) {
        console.log("Erro ao excluir cliente.");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("cliente não encontrado");
    } else{
        console.log("cliente excluido com sucesso!");
    }

    conexao.end();
});