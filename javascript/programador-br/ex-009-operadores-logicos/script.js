// && e
// || ou
// ! Negação

var idade = 23;

var maior20 = idade >= 20;
var menor30 = idade <= 30;

var entre = maior20 && menor30; 

console.log("Idade", idade);
console.log("Maior que 20", maior20);
console.log("Menor que 30", menor30);
console.log("Entre 20 e 30", entre);

console.log("==================");

var idade_2 = 16;

var menor10 = idade_2 <= 10;
var maior65 = idade_2 >= 65;
var alimento = true;

var gratuidade = menor10 || maior65 || alimento; 

console.log("Idade", idade_2);
console.log("Menor que 10", menor10);
console.log("Maior que 65", maior65);
console.log("Trouxe alimento?", alimento);
console.log("Tem direito a gratuidade?", gratuidade);

console.log("==================");

var idade_3 = 230;

var maior40 = idade_3 >= 40;
var menor40 = !maior40;

console.log("Idade", idade_3);
console.log("Maior que 40", maior40);
console.log("Menor que 40", menor40);