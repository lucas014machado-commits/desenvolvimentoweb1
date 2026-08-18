const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "empresa"
});

/*const nome1 = "João";
const cargo1 = "Vendedor";
const salario1 = 2500

const insert1 = "INSERT INTO funcionarios(nome, cargo, salario) VALUES (?, ?, ?)";

conexao.query (insert1, [nome1, cargo1, salario1], function(erro) {
    
    if(erro) {
        console.log("Erro ao cadastrar João");
        console.log(erro);
    } else {
        console.log("João cadastrado com sucesso");
    }
});

const nome2 = "Mariana";
const cargo2 = "Gerente";
const salario2 = 4500

const insert2 = "INSERT INTO funcionarios(nome, cargo, salario) VALUES (?, ?, ?)";

conexao.query (insert2, [nome2, cargo2, salario2], function(erro) {
    
    if(erro) {
        console.log("Erro ao cadastrar Mariana");
        console.log(erro);
    } else {
        console.log("Mariana cadastrada com sucesso");
    }
});

const nome3 = "Lucas";
const cargo3 = "Atendente";
const salario3 = 2200

const insert3 = "INSERT INTO funcionarios(nome, cargo, salario) VALUES (?, ?, ?)";

conexao.query (insert3, [nome3, cargo3, salario3], function(erro) {
    
    if(erro) {
        console.log("Erro ao cadastrar Lucas");
        console.log(erro);
    } else {
        console.log("Lucas cadastrado com sucesso");
    }

    conexao.end();
});

const id = 3;
const deletar = 'DELETE FROM funcionarios WHERE id = ?';

conexao.query(deletar,[id], function(erro, resultado) {

  if(erro) {
        console.log("Erro ao excluir funcionario.");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("funcionario não encontrado");
    } else{
        console.log("funcionario excluido com sucesso!");
    }

    conexao.end();
});*/

const nome4 = "vitor";
const cargo4 = "Analista";
const salario4 = 10000

const insert4 = "INSERT INTO funcionarios(nome, cargo, salario) VALUES (?, ?, ?)";

conexao.query (insert4, [nome4, cargo4, salario4], function(erro) {
    
    if(erro) {
        console.log("Erro ao cadastrar Vitor");
        console.log(erro);
    } else {
        console.log("Vitor cadastrado com sucesso");
    }

    conexao.end();
});