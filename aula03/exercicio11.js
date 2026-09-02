const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sistema",
   
});

function cadastrarEvento() {
    const nome = readline.question("Digite o nome do evento: ");
    const data_evento = readline.question("Digite a data do evento: ");

    const insert = "INSERT INTO eventos (nome, data_evento) VALUES (?, ?)";
    conexao.query(insert, [nome, data_evento], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar evento. ");
            console.log(erro)
        } else {
            console.log("Evento cadastrado com sucesso. ");
        }
        menu();
    });
}

function alterarEvento() {
    const id = readline.question("Digite o id do evento que deseja alterar ");
    const nome = readline.question("Digite o nome do evento que deseja alterar ");
    const data_evento = readline.question("Digite a data do evento que deseja alterar ");

    const update = `
        UPDATE eventos
        SET nome = ?, data_evento = ?
        WHERE id = ?
        `;

    conexao.query(update,[nome, data_evento, id], function (erro, resultado) {
            if (erro) {
                console.log("Erro ao atualizar evento ");
                console.log(erro);
            } else if (resultado.affectedRows === 0) {
                console.log("Evento não encontrado ");

            } else {
                console.log("Evento atualizado com sucesso ");
            }
        menu();    
    });
 }

function excluirEvento() {
    const id = readline.questionInt("Digite o ID do evento: ");

    const deletar = "DELETE FROM eventos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir o evento.");

        } else if (resultado.affectedRows === 0) {
            console.log("Evento nao encontrado.");
        } else {
            console.log("Evento excluído com sucesso");
        }
        menu();
    });
}

function listarEventos() {
    const sql = "SELECT * FROM eventos ORDER BY data_evento ASC";

    conexao.query(sql, function(erro, eventos) {
        
        if(erro) {
            console.log("Erro ao buscar eventos: ");
        } else {

            console.log("\n--- EVENTOS ---");

            eventos.forEach(function (evento) {
                console.log(
                    evento.id + " - " +
                    evento.nome + " - " +
                    evento.data_evento
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar evento");
    console.log("2 - Alterar evento");
    console.log("3 - Excluir evento");
    console.log("4 - Listar eventos");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarEvento();

    } else if (opcao === 2) {

        alterarEvento();

    } else if (opcao === 3) {

        excluirEvento();

    } else if (opcao === 4) {

        listarEventos();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();