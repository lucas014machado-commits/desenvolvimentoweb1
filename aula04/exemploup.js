const mysql2 = require("mysql2");

const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
});

const nome = "Maria da Silva";
const email = "maria.silva@gmail.com";

const id = 1;

const update =  `

    UPDATE alunos

    SET nome = ?, email = ?

    WHERE id = ?

`;

conexao.query(update, [nome, email, id], function (erro, resultado) {

 

    if (erro) {

        console.log("Erro ao atualizar o aluno.");

        console.log(erro);

    } else if (resultado.affectedRows === 0) {

        console.log("Aluno não encontrado.");

    } else {

        console.log("Aluno atualizado com sucesso!");

    }

 

    conexao.end();

});


