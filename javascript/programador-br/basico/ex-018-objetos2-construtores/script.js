// function criarAluno(nome, n1, n2) {
// 	return {
// 		nome: nome,
// 		nota1: n1,
// 		nota2: n2,
// 		media: function () {
// 			return (this.nota1 + this.nota2) / 2;
// 		},
// 	};
// }

// var turma = [
// 	criarAluno("Allan", 5.5, 8),
// 	criarAluno("Marina", 8.0, 6),
// 	criarAluno("Pedro", 6.8, 9),
// ];

// for (var index in turma) {
// 	var estudante = turma[index];

// 	console.log(`${estudante.nome} - ${estudante.nota1} - ${estudante.nota2} - ${estudante.media()}`);
// }

function Aluno(nome, n1, n2) {
		(this.nome = nome),
		(this.nota1 = n1),
		(this.nota2 = n2),
		(this.media = function () {
			return (this.nota1 + this.nota2) / 2;
		});
}

var alunos = [
	new Aluno("João", 7, 8),
	new Aluno("Maria", 9, 6),
	new Aluno("Pedro", 5, 7),
];

for (var index in alunos) {
	var a = alunos[index];

	console.log(`${a.nome} - ${a.nota1} - ${a.nota2} - ${a.media()}`);
}
