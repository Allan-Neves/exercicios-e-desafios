// Nome do aluno - notaA - notaB - Média - Situação

var alunos = ["José", "Marina", "Julia", "Carlos", "Karina"];
var notasA = [7.2, 0.5, 5.8, 2.2, 9.6];
var notasB = [9.4, 6.0, 6.9, 6.3, 5.0];

function CalcularMedia(n1, n2) {
	return (n1 + n2) / 2;
}

function determinarSituacao(m) {
	var situacao = m > 7 ? "Aprovado" : "Reprovado";

	return situacao;
}

for (index in alunos) {
	var nomes = alunos[index];
	var nota1 = notasA[index];
	var nota2 = notasB[index];
	var media = CalcularMedia(nota1, nota2);
	var s = determinarSituacao(media);

	console.log(`${nomes} - ${nota1} - ${nota2} - ${media} - ${s}`);
}
