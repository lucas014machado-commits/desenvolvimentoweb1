const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola",
   
});


function cadastrarAluno() {
    const nome = readline.question("Digite o nome do aluno: ");
    const email = readline.question("Digite o email do aluno: ");
    const endereco = readline.question("Digite o endereço do aluno: ");
    const matricula = readline.question("Digite a matrícula do aluno: ");
    const curso = readline.question("Digite o curso do aluno: ");
    const serie = readline.question("Digite a serie do aluno: ");

    const insert = "INSERT INTO alunos (nome, email, endereco, matricula, curso, serie) VALUES (?, ?, ?, ?, ?, ?)";
    conexao.query(insert, [nome, email, endereco, matricula, curso, serie], function (erro) {

        if (erro) {
            console.log("Erro ao cadastrar aluno. ");
            console.log(erro);
        } else {
            console.log("Aluno cadastrado com sucesso. ");
        }
        menu();
    });
}

function alterarAluno() {
    const id = readline.questionInt("Digite o ID do aluno que deseja atualizar: ");
    const nome = readline.question("Digite o novo nome do aluno: ");
    const email = readline.question("Digite o novo email do aluno: ");
    const endereco = readline.question("Digite o novo endereco do aluno: ");
    const matricula = readline.question("Digite a nova matricula do aluno: ");
    const curso = readline.question("Digite o novo curso do aluno: ");
    const serie = readline.question("Digite a nova serie do aluno: ");

    const update = `
        UPDATE alunos
        SET nome = ?, email = ?, endereco = ?, matricula = ?, curso = ?, serie = ?
        WHERE id = ?
    `;

    conexao.query(update, [nome, email, endereco, matricula, curso, serie, id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao atualizar o aluno.");
            console.log(erro);
        } else if (resultado.affectedRows === 0) {
            console.log("Aluno nao encontrado.");
        } else {
            console.log("Aluno atualizado com sucesso!");
        }
        menu();
    });
}

function excluirAluno() {
    const id = readline.questionInt("Digite o ID do aluno: ");

    const deletar = "DELETE FROM alunos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console .log("Erro ao excluir o aluno.");

        } else if (resultado.affectedRows === 0) {
            console.log("Aluno nao encontrado.");
        } else {
            console.log("Aluno excluído com sucesso");
        }
        menu();
    });
}


function listarAlunos() {

    const sql = "SELECT * FROM alunos";

    conexao.query(sql, function (erro, alunos) {

        if (erro) {
            console.log("Erro ao buscar alunos.");
        } else {

            console.log("\n--- ALUNOS ---");

            alunos.forEach(function (aluno) {
                console.log(
                    aluno.id + " - " +
                    aluno.nome + " - " +
                    aluno.email + " - " +
                    aluno.endereco + " - " +
                    aluno.matricula + " - " +
                    aluno.curso + " - " +
                    aluno.serie
                );
            });
        }

        menu();
    });
}



function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Alterar aluno");
    console.log("3 - Excluir aluno");
    console.log("4 - Listar alunos");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {
        cadastrarAluno();
    } else if (opcao === 2) {
        alterarAluno();
    } else if (opcao === 3) {
        excluirAluno();
    } else if (opcao === 4) {
        listarAlunos();
    } else if (opcao === 0) {
        console.log("Programa encerrado.");
        conexao.end();
    } else {
        console.log("Opcao invalida.");
        menu();
    }
}

menu();



