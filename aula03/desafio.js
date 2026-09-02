const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "futebol",
   
});

function cadastrarClube() {
    const nome = readline.question("Digite o nome do clube: ");
    const titulos = readline.questionInt("Digite a quantidade de titulos: ");

    const insert = "INSERT INTO clubes (nome, titulos) VALUES (?, ?)";
    conexao.query(insert, [nome, titulos], function(erro) {
        if (erro) {
            console.log("Erro ao cadastrar clube: ", erro);
        } else {
            console.log("Clube cadastrado com sucesso!");
        }
        menu();
    });
}

function alterarClube() {
    const id = readline.questionInt("Digite o ID do clube que deseja atualizar: ");
    const nome = readline.question("Digite o novo nome do clube: ");
    const titulos = readline.questionInt("Digite a nova quantidade de titulos: ");      

    const update = `
        UPDATE clubes
        SET nome = ?, titulos = ?
        WHERE id = ?
    `;

    conexao.query(update, [nome, titulos, id], function(erro, resultado) {
        if (erro) {
            console.log("Erro ao atualizar clube: ", erro);
        } else if (resultado.affectedRows === 0) {
            console.log("Clube não encontrado.");
        } else {
            console.log("Clube atualizado com sucesso!");
        }
        menu();
    });
}

function listarClubes() {
    const sql = "SELECT * FROM clubes ORDER BY titulos DESC";

    conexao.query(sql, function(erro, clubes) {
        if (erro) {
            console.log("Erro ao buscar clubes: ", erro);
        } else if (clubes.length === 0) {
            console.log("\nNenhum clube cadastrado.");
        } else {
            console.log("\n--- CLUBES CADASTRADOS ---");
            clubes.forEach(function(clube) {
                console.log(
                    clube.id + " - " +
                    clube.nome + " - Titulos: " +
                    clube.titulos
                );
            });
        }
        menu();
    });
}

function excluirClube() {
    const id = readline.questionInt("Digite o ID do clube: ");

    const sqlSelect = "SELECT * FROM clubes WHERE id = ?";
    conexao.query(sqlSelect, [id], function(erro, resultados) {
        if (erro) {
            console.log("Erro ao buscar clube.");
            menu();
            return;
        }

        if (resultados.length === 0) {
            console.log("Clube nao encontrado.");
            menu();
            return;
        }

        const clube = resultados[0];
        console.log(`\nRegistro encontrado: Nome: ${clube.nome} | Titulos: ${clube.titulos}`);

        const confirmacao = readline.question("Deseja excluir? (S/N): ").toUpperCase();

        if (confirmacao === "S") {
            const sqlDelete = "DELETE FROM clubes WHERE id = ?";
            conexao.query(sqlDelete, [id], function(erroDelete) {
                if (erroDelete) {
                    console.log("Erro ao excluir o clube.");
                } else {
                    console.log("Clube excluido com sucesso.");
                }
                menu();
            });
        } else {
            console.log("Exclusao cancelada.");
            menu();
        }
    });
}

function menu() {
    console.log("\n===== MENU FUTEBOL =====");
    console.log("1 - Cadastrar clube");
    console.log("2 - Alterar clube");
    console.log("3 - Excluir clube");
    console.log("4 - Listar clubes");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {
        cadastrarClube();
    } else if (opcao === 2) {
        alterarClube();
    } else if (opcao === 3) {
        excluirClube();
    } else if (opcao === 4) {
        listarClubes();
    } else if (opcao === 0) {
        console.log("Programa encerrado.");
        conexao.end();
    } else {
        console.log("Opcao invalida.");
        menu();
    }
}

menu();