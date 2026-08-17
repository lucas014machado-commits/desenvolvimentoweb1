const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "locadora"
});

/*const titulo1 = "interestelar";
const ano1 = 2014;

const insert1 ="INSERT INTO filmes (titulo, ano) VALUES (?, ?)";

conexao.query (insert1, [titulo1, ano1], function(erro) {
    if(erro) {
        console.log ("Erro ao cadastrar interestelar");
        console.log (erro);
} else {
        console.log ("interestelar cadastrado com sucesso");
    }
});

const titulo2 = "Avatar";
const ano2 = 2009;

const insert2 ="INSERT INTO filmes (titulo, ano) VALUES (?, ?)";

conexao.query (insert2, [titulo2, ano2], function(erro) {
    if(erro) {
        console.log ("Erro ao cadastrar Avatar");
        console.log (erro);
} else {
        console.log ("Avatar cadastrado com sucesso");
    }
});

const titulo3 = "Toy Story";
const ano3 = 1995;

const insert3 ="INSERT INTO filmes (titulo, ano) VALUES (?, ?)";

conexao.query (insert3, [titulo3, ano3], function(erro) {
    if(erro) {
        console.log ("Erro ao cadastrar Toy Story");
        console.log (erro);
} else {
        console.log ("Toy Story cadastrado com sucesso");
    }

    conexao.end();
});
*/
const id = 2;
const deletar = 'DELETE FROM filmes WHERE id = ?';

conexao.query(deletar,[id], function(erro, resultado) {
    if(erro) {
        console.log("Erro ao excluir filme.");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("filme não encontrado");
    } else{
        console.log("filme excluído com sucesso!");
    }

    conexao.end();
});
*/
const titulo4 = "Homem Aranha: Novo Dia";
const ano4 = 2026;

const insert4 ="INSERT INTO filmes (titulo, ano) VALUES (?, ?)";

conexao.query (insert4, [titulo4, ano4], function(erro) {
    if(erro) {
        console.log ("Erro ao cadastrar Homem Aranha: Novo Dia");
        console.log (erro);
} else {
        console.log ("Homem Aranha: Novo Dia cadastrado com sucesso");
    }

    conexao.end();
});

