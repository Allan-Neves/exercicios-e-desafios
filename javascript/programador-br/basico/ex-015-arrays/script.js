// var alunos = new Array("José", "Marina", "Julia", "Carlos");
var alunos = ["José", "Marina", "Julia", "Carlos", "Karina"];

// for (var i = 0; i < alunos.length; i++) {
// 	console.log(alunos[i]);
// }

// for (var i in alunos) { // O in pega o index
// 	console.log(alunos[i]);
// }

for (var aluno of alunos) {
	// O in pega o valor
	console.log(aluno);
}
