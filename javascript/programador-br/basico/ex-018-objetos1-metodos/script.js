function calcMedia() {
	return (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
};

var aluno = {
	nome: "Allan",
	notas: [6, 7, 8],

	media: calcMedia
};

var aluno1 = {
	nome: "Julia",
	notas: [9, 5, 4],

	media: calcMedia
};

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());
