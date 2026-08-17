const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "instituicao"
});

/*const nome1 = "Desenvolvimento de sistemas";
const carga_horaria1 = 1200;

const insert1 = "INSERT INTO cursos(nome, carga_horaria) VALUES (?, ?)";

conexao.query (insert1, [nome1, carga_horaria1], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Desenvolvimento de sistemas");
        console.log(erro);
    } else {
        console.log("Desenvolvimento de sistemas cadastrada com sucesso");
    }
});

const nome2 = "Informática";
const carga_horaria2 = 1000;

const insert2 = "INSERT INTO cursos(nome, carga_horaria) VALUES (?, ?)";

conexao.query (insert2, [nome2, carga_horaria2], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Informática");
        console.log(erro);
    } else {
        console.log("Informática cadastrada com sucesso");
    }
});

const nome3 = "Administração";
const carga_horaria3 = 800 ;

const insert3 = "INSERT INTO cursos(nome, carga_horaria) VALUES (?, ?)";

conexao.query (insert3, [nome3, carga_horaria3], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Administração");
        console.log(erro);
    } else {
        console.log("Administração cadastrado com sucesso");
    }

    conexao.end();
});*/


/*const id = 3;
const deletar = 'DELETE FROM cursos WHERE id = ?';

conexao.query(deletar,[id], function(erro, resultado) {

  if(erro) {
        console.log("Erro ao excluir curso.");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("curso não encontrado");
    } else{
        console.log("curso excluido com sucesso!");
    }

    conexao.end();
});*/

const nome4 = "Recursos Humano";
const carga_horaria4 = 1100 ;

const insert4 = "INSERT INTO cursos(nome, carga_horaria) VALUES (?, ?)";

conexao.query (insert4, [nome4, carga_horaria4], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Recursos Humano");
        console.log(erro);
    } else {
        console.log("Recursos Humano cadastrado com sucesso");
    }

    conexao.end();
});