// &&
// || ou
// Negativo

// &&
// var verdadeiro = true;
// var falso = true;

// var teste = verdadeiro && falso; // A é verdadeiro e B é verdadeiro?
// console.log(teste);

var idade = 25;
var maior20 = idade >= 20;
var menor30 = idade <= 30;
var entre = maior20 && menor30;

console.log("Idade: ", idade);
console.log("Idade é maior que 20: ", maior20);
console.log("Idade é menor que 30: ", menor30);
console.log("Idade está entre 20 e 30: ", entre);


console.log("====================")

// ||
var idade1 = 35;
var menor10 = idade <= 10;
var maior65 = idade >= 65;
var pacoteArroz = true;
var gratuidade = menor10 || maior65 || pacoteArroz;

console.log("Idade: ", idade1);
console.log("Idade é menor que 10: ", menor10);
console.log("Idade é maior que 65: ", maior65);
console.log("Tem direito a gratuidade: ", gratuidade);


console.log("====================")

// Negativo
var idade2 = 19;
var maiorQue20 = idade2 >= 20;
var menorQue20 = !maiorQue20;

console.log("Idade: ", idade2);
console.log("Idade é maior que 20: ", maiorQue20);
console.log("Idade é menor que 20: ", menorQue20);