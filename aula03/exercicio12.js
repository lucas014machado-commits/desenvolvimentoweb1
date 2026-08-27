const mysql2 = require ("mysql2");
const readline = require("readline-sync");


const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "garagem",
   
});

function cadastrarVeiculo() {
    const modelo = readline.question("Digite o modelo do veículo: ");
    const placa = readline.question("Digite a placa do veículo: ");

    const insert = "INSERT INTO veiculos (modelo, placa) VALUES (?, ?)";
    conexao.query(insert, [modelo, placa], function(erro) {

        if (erro) {
            console.log("Erro ao cadastrar veículo. ");
            console.log(erro)
        } else {
            console.log("Veículo cadastrado com sucesso. ");
        }
        menu();
    });
}

function alterarVeiculo() {
    const id = readline.questionInt("Digite o ID do veículo que deseja atualizar: ");
    const modelo = readline.question("Digite o novo nome do veículo: ");
    const placa = readline.question("Digite a nova placa do veículo: ");


    const update = `
        UPDATE veiculos
        SET modelo = ?, placa = ?
        WHERE id = ?
    `;

    conexao.query(update, [modelo, placa, id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao atualizar veículo.");
            console.log(erro);
        } else if (resultado.affectedRows === 0) {
            console.log("veículo nao encontrado.");
        } else {
            console.log("veículo atualizado com sucesso!");
        }
        menu();
    });
}

function excluirVeiculo() {
    const id = readline.questionInt("Digite o ID do veículo: ");

    const deletar = "DELETE FROM veiculos WHERE id = ?";

    conexao.query(deletar, [id], function (erro, resultado) {
        if (erro) {
            console.log("Erro ao excluir o veículo.");

        } else if (resultado.affectedRows === 0) {
            console.log("Veículo nao encontrado.");
        } else {
            console.log("Veículo excluído com sucesso");
        }
        menu();
    });
}

function listarVeiculos() {
    const sql = "SELECT * FROM veiculos";

    conexao.query(sql, function(erro, veiculos) {
        if (erro) {
            console.log("Erro ao buscar veículos: ");
            console.log(erro);
        } else if (veiculos.length === 0) {
            console.log("\nNenhum veículo cadastrado.");
        } else {
            console.log("\n--- VEÍCULOS ---");

            veiculos.forEach(function (veiculo) {
                console.log(
                    veiculo.id + " - " +
                    veiculo.modelo + " - " +
                    veiculo.placa
                );
            });
        }
        menu();
    });
}

function menu() {

    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar veículo");
    console.log("2 - Alterar veículo");
    console.log("3 - Listar veículos ");
    console.log("4 - Excluir veículo ");
    console.log("0 - Sair");

    const opcao = readline.questionInt("Escolha uma opcao: ");

    if (opcao === 1) {

        cadastrarVeiculo();

    } else if (opcao === 2) {

        alterarVeiculo();

    } else if (opcao === 3) {

        listarVeiculos();
    } else if (opcao === 4) {

        excluirVeiculo();

    } else if (opcao === 0) {

        console.log("Programa encerrado.");
        conexao.end();

    } else {

        console.log("Opcao invalida.");
        menu();
    }
}
menu();