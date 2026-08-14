const mysql2 = require ("mysql2");
const readline = require("readline-sync");

//conexão com MySQL
const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
});

// Funcão para cadastrar aluno
/*function cadastrarAluno() {
    const nome = readline.question("Digite o nome do aluno: ");
    const email = readline.question("Digite o email do aluno: ");

    const insert = "INSERT INTO alunos (nome, email) VALUES (?, ?)";
    conexao.query(insert, [nome, email], function (erro) {

        if (erro) {
            console.log ("Erro ao cadastrar.");
            console.log(erro);
        } else {
            console.log("Aluno cadastrado com sucesso!");
        }
      // menu();  
    });
}
cadastrarAluno();
*/
function excluirAluno() {
    const id = readline.questionInt("Digite o ID do aluno: ");

    const deletar = "DELETE FROM alunos WHERE id ?";

    conexao.query(deletar, [id]), function (erro, resultado) {
        if (erro) {
            console .log("Erro ao excluir o aluno.");

        } else if (resultado.affectedRowss === 0) {
            console.log("Aluno nao encontrado.");
        } else {
            console.log("Aluno excluído com sucesso");
        }
    }
}