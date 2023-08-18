function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,

        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Igor", 9, 5),
    criarAluno("Allan", 10, 8)
]

for (aluno of turma) {
    console.log(`${aluno.nome} - ${aluno.nota1} - ${aluno.nota2} - ${aluno.media()}`)
}