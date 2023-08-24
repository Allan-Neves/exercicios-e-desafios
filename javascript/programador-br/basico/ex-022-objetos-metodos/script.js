var calcMedia = function () {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Allan",
    notas: [7, 5],
    media: calcMedia
}

var aluno1 = {
    nome: "João",
    notas: [3, 8],
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(``);

console.log(aluno1.nome);
console.log(aluno1.media());