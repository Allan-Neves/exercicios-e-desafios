var aluno = {
    nome: "Allan",
    nota1: [5.0, 9.0]
}

var novaPropriedade = "sobrenome";
aluno[novaPropriedade] = "Neves";
// aluno["sobrenome"] = "Neves";

aluno.matricula = 44562;

// console.log(aluno);
// console.log(aluno.nome);
console.log(aluno["sobrenome"]);

var professor = new Object();
professor.nome = "Igor";
professor.sobrenome = "Oliveira";

console.log(professor);