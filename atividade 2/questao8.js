const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
});

/*const nome1 = "Banco de Dados";
const professor1 = "Carlos";
const aulas_semanais1 = "4 aulas semanais";

const insert1 = "INSERT INTO disciplinas (nome, professor, aulas_semanais) VALUES (?, ?, ?)";

conexao.query (insert1, [nome1, professor1, aulas_semanais1], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Banco de Dados ");
        console.log(erro);
    } else {
        console.log("Banco de dados cadastrado com sucesso");
    }
});

const nome2 = "Programação";
const professor2 = "Fernanda";
const aulas_semanais2 = "5 aulas semanais";

const insert2 = "INSERT INTO disciplinas (nome, professor, aulas_semanais) VALUES (?, ?, ?)";

conexao.query (insert2, [nome2, professor2, aulas_semanais2], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Programação ");
        console.logo(erro);
    } else {
        console.log("Programação cadastrado com sucesso");
    }
});

const nome3 = "Análise de Dados";
const professor3 = "Maria";
const aulas_semanais3 = "3 aulas semanais";

const insert3 = "INSERT INTO disciplinas (nome, professor, aulas_semanais) VALUES (?, ?, ?)";

conexao.query (insert3, [nome3, professor3, aulas_semanais3], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Análise de Dados ");
        console.logo(erro);
    } else {
        console.log("Análise de Dados cadastrado com sucesso");
    }

    conexao.end();
});

const id = 2;
const deletar = 'DELETE FROM disciplinas WHERE id = ?';

conexao.query(deletar,[id], function(erro, resultado) {

    if(erro) {
        console.log("Erro ao excluir Disciplina");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("Disciplina não encontrada");
    } else {
        console.log("Disiciplina excluída com sucesso");
    }

    conexao.end();
});
*/
const nome2 = "Programção Orientada";
const professor2 = "Juliano";
const aulas_semanais2 = "2 aulas semanais";

const insert2 = "INSERT INTO disciplinas (nome, professor, aulas_semanais) VALUES (?, ?, ?)";

conexao.query (insert2, [nome2, professor2, aulas_semanais2], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Programção Orientada ");
        console.logo(erro);
    } else {
        console.log("Programção Orientada cadastrado com sucesso");
    }

    conexao.end();
});