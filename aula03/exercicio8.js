const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "instituicao",
   
});

function cadastrarCurso() {
    const nome = readline.question("Digite o nome do curso: ");
    const carga_horaria = readline.questionInt("Digite a carga horária do curso: ");

    const insert = "INSERT INTO cursos (nome, carga_horaria) VALUES (?, ?)";
    conexao.query(insert, [nome, carga_horaria], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar curso. ");
            console.log(erro)
        } else {
            console.log("Curso cadastrado com sucesso. ");
        }
        menu();
    });
}

function excluirCurso() {
    const id = readline.questionInt("Digite o ID do curso: ");

    const deletar = "DELETE FROM cursos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir curso.");

        } else if (resultado.affectedRows === 0) {
            console.log("Curso nao encontrado.");
        } else {
            console.log("Curso excluído com sucesso");
        }
        menu();
    });
}

function listarCursos() {
    const sql = "SELECT * FROM cursos";

    conexao.query(sql, function(erro, cursos) {
        
        if(erro) {
            console.log("Erro ao buscar cursos: ");
        } else {

            console.log("\n---  CURSOS ---");

            cursos.forEach(function (curso) {
                console.log(
                    curso.id + " - " +
                    curso.nome + " - " +
                    curso.carga_horaria  + " horas"
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar curso");
    console.log("2 - Excluir curso");
    console.log("3 - Listar cursos");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarCurso();

    } else if (opcao === 2) {

        excluirCurso();

    } else if (opcao === 3) {

        listarCursos();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();