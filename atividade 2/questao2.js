const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "biblioteca"
});

const titulo1 = "Dom Casmurro";
const autor1 = "Machado de Assis";

const insert1 = "INSERT INTO livros(titulo, autor) VALUES (?, ?)";

conexao.query(insert1, [titulo1, autor1], function(erro) {

    if(erro) {
        console.log("Erro ao cadastrar Dom Casmurro");
        console.log(erro);
    } else {
        console.log("Dom Casmurro cadastrado com sucesso!");
    }
});

const titulo2 = "O Pequeno Príncipe";
const autor2 = "Antoine de Saint-Exupéry";

const insert2 = "INSERT INTO livros(titulo, autor) VALUES (?, ?)";

conexao.query(insert2, [titulo2, autor2], function(erro) {

    if (erro) {
        console.log("Erro ao cadastrar O Pequeno Príncipe");
        console.log(erro);
    } else {
        console.log("O Pequeno Príncipe cadastrado com sucesso!");
    }
});


const titulo3 = "Harry Potter e a Pedra Filosofal";
const autor3 = "J. K. Rowling";

const insert3 = "INSERT INTO livros(titulo, autor) VALUES (?, ?)";

conexao.query(insert3, [titulo3, autor3], function(erro) {

    if (erro) {
        console.log("Erro ao cadastrar Harry Potter");
        console.log(erro);
    } else {
        console.log("Harry Potter cadastrado com sucesso!");
    }

    conexao.end();
});

const id = 2
const deletar = 'DELETE FROM livros WHERE id = ?';
conexao.query(deletar,[id], function(erro, resultado) {

  if(erro) {
        console.log("Erro ao excluir o livro.");
        console.log(erro);
    }
    else if (resultado.affectedRows ===0) {
        console.log("livro não encontrado");
    } else{
        console.log("livro excluido com sucesso!");
    }

    conexao.end();
});
