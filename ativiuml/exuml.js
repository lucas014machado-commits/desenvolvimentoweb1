const readline = require("readline-sync");

class Aluno{
    constructor(
        nome,
        notagrauA,
        notagrauB,
        mediaFinal 
    )
    {
        this.nome = nome;
        this.notaGrauA = notagrauA;
        this.notaGrauB = notagrauB;
        this.mediaFinal = mediaFinal = 0;
    }

    calcularMediaFinal(){
        this.mediaFinal = (this.notaGrauA * 1 + this.notaGrauB * 2) / 3;
    }
    
    substituirNota(){ 
    const opcao = readline.question("Deseja substituir a nota mais baixa? digite S para sim e N para não"); 
    
        if(opcao.toUpperCase() === "S"){ 
            if(this.notaGrauA > this.notaGrauB){ 
                this.notaGrauB = readline.questionFloat("Informe a nova nota de grau B"); 
            }else{ 
                this.notaGrauA = readline.questionFloat("Informe a nova nota de grau A"); 
            } 
        }else if(opcao.toUpperCase() === "N") {
             console.log("Nem uma nota foi substituida"); 
        }else{ 
            console.log("\nFavor digitar somente S para sim ou N para não"); 
        
           
        this.substituirNota();
        }
    } 
}

let nome = readline.question("Digite o nome do aluno: ");
let notaGrauA =readline.questionFloat("Informe a nota de Grau A: "); 
let notaGrauB =readline.questionFloat("Informe a nota de Grau B: "); 
let aluno = new Aluno(nome, notaGrauA, notaGrauB); 


aluno.substituirNota(); 
aluno.calcularMediaFinal();

console.log("Nome: " + aluno.nome); 
console.log("Nota de grau A: " + aluno.notaGrauA); 
console.log("Nota de grau B: " + aluno.notaGrauB); 
console.log("Média Final: " + aluno.mediaFinal);