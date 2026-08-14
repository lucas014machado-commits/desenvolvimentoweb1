const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
});

const nome1 = "Maria";
const disciplina1 = "Matemática";

const insert1 = "INSERT INTO professores(nome, disciplina) VALUES (?, ?)";

conexao.query (insert1, [nome1, disciplina1], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Maria");
        console.log(erro);
    } else {
        console.log("Maria cadastrada com sucesso");
    }
});

const nome2 = "Carlos";
const disciplina2 = "Banco de Dados";

const insert2 = "INSERT INTO professores(nome, disciplina) VALUES (?, ?)";

conexao.query (insert2, [nome2, disciplina2], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Carlos");
        console.log(erro);
    } else {
        console.log("Carlos cadastrada com sucesso");
    }
});

const nome3 = "Fernanda";
const disciplina3 = "Programação";

const insert3 = "INSERT INTO professores(nome, disciplina) VALUES (?, ?)";

conexao.query (insert1, [nome3, disciplina3], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Fernanda");
        console.log(erro);
    } else {
        console.log("Fernanda cadastrada com sucesso");
    }

    conexao.end();
});

const id = 2
const deletar = 'DELETE FROM professores WHERE id = ?';