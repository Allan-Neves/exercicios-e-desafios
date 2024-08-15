var idade = parseInt(prompt("Digite a sua idade"));

// if (idade >= 18 && idade < 70) {
// 	console.log("Você pode comprar bebidas alcoólicas.");
// 	console.log("Qual o seu pedido?");
// } else {
// 	console.log("Você não pode comprar bebidas alcoólicas.");
// 	console.log("Volte futuramente ou em outra vida.");
// }

if (idade >= 18 || idade < 70) {
	console.log("Você pode comprar bebidas alcoólicas.");
	console.log("Qual o seu pedido?");
} else {
	console.log("Você não pode comprar bebidas alcoólicas.");
	console.log("Volte futuramente ou em outra vida.");
}

console.log("========================");

var nota = parseFloat(prompt("Digite a nota do(a) aluno(a)"));

if (nota === 10) {
	console.log("Aprovado com Distinção");
} else if (nota >= 7) {
	console.log("Aprovado");
} else {
	console.log("Reprovado");
}

console.log("========================");

var letra = prompt("Digite uma letra");

if (
	letra === "a" ||
	letra === "b" ||
	letra === "c" ||
	letra === "d" ||
	letra === "e"
) {
	console.log("A letra digitada é uma vogal.");
} else {
	console.log("A letra digitada é uma consoante.");
}
