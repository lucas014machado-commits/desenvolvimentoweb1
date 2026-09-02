const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sala",
   
});

function cadastrarComputador() {
    const patrimonio = readline.question("Digite o nome do patrimonio: ");
    const localizacao = readline.question("Digite a localizacao: ");

    const insert = "INSERT INTO computadores (patrimonio, localizacao) VALUES (?, ?)";
    conexao.query(insert, [patrimonio, localizacao], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar computador. ");
            console.log(erro)
        } else {
            console.log("Computador cadastrado com sucesso. ");
        }
        menu();
    });
}

function alterarComputador() {
    const id = readline.questionInt("Digite o ID do computador que deseja atualizar: ");
    const patrimonio = readline.question("Digite o novo nome do patrimonio: ");
    const localizacao = readline.question("Digite a nova localizacao: ");

    const update = `
        UPDATE computadores
        SET patrimonio = ?, localizacao = ?
        WHERE id = ?
        `;

    conexao.query(update,[patrimonio, localizacao, id], function (erro, resultado) {
            if (erro) {
                console.log("Erro ao atualizar computador ");
                console.log(erro);
            } else if (resultado.affectedRows === 0) {
                console.log("Computador não encontrado ");

            } else {
                console.log("Computador atualizado com sucesso ");
            }
        menu();    
    });
 }

function excluirComputador() {
    const id = readline.questionInt("Digite o ID do computador: ");

    const consultar = "SELECT * FROM computadores WHERE id = ?";

    conexao.query(consultar, [id], function (erro, computadores) {
        if (erro) {
            console.log("Erro ao consultar computador.");
            console.log(erro);
            menu();
            return;

        } if (computadores.length === 0) {
            console.log("Computador nao encontrado.");
            menu();
            return;
        } 
        
        const computador = computadores[0];

        console.log("\nComputador encontrado: ");
        console.log("patrimonio", computador.patrimonio);
        console.log("Localizacao;", computador.localizacao);

        const confirmar = readline.question("Deseja excluir? (S/N): ");

        if (confirmar.toUpperCase() === "S") {

            const deletar = "DELETE FROM computadores WHERE id = ?";

            conexao.query(deletar, [id], function(erro) {

           if (erro) {
                console.log("Erro ao excluir computador.");
                console.log(erro);
            } else {
                    console.log("Computador excluído com sucesso.");
            }

            menu();
        });
    
    } else {
            console.log("Exclusão cancelada.");
            menu();
        }
    });
}
        
    


function listarComputadores() {
    const sql = "SELECT * FROM computadores";

    conexao.query(sql, function(erro, computadores) {
        
        if(erro) {
            console.log("Erro ao buscar computador: ");
        } else {

            console.log("\n--- COMPUTADORES ---");

            computadores.forEach(function (computador) {
                console.log(
                    computador.id + " - " +
                    computador.patrimonio + " - " +
                    computador.localizacao
                )
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar computador");
    console.log("2 - Alterar computador");
    console.log("3 - Excluir computador");
    console.log("4 - Listar computadores");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarComputador();

    } else if (opcao === 2) {

        alterarComputador();

    } else if (opcao === 3) {

        excluirComputador();

    } else if (opcao === 4) {

        listarComputadores();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();