var numero = prompt("Digite um número");
var multiplicador = 0;

console.log("Multiplicação com FOR")
for(var i = 0; i <= 10; i++) {

	var multiplicacao = numero * i;

	console.log(multiplicacao)
}

console.log("Multiplicação com WHILE")
while (multiplicador <= 10) {
	var multiplicacao = numero * multiplicador;
	multiplicador++;

	console.log(multiplicacao);
}


console.log("Soma dos números entre 0 e 100, com FOR")
var soma = 0;

for(var i = 0; i <= 100; i++) {

	var resultado = soma + i
	soma = resultado;
}

console.log(resultado)
// console.log(soma)
