// =     x = y     x = y
// +=    x += y    x = x, y
// -=    x -= y    x = x - y
// *=    x *= y    x = x * y
// /=    x /= y    x = x / y
// %=    x %= y    x = x % y

var a = 30;
// a += 5; // a = a + 5;
// a *= 5;
// a /= 2;
a %= 28;

console.log(a);

// Exercícios

var ex1 = 5;
var ex1_b = 3;
ex1 += ex1_b;
console.log(ex1, " | Ex 1");
//=============//

var ex2 = 10;
ex2 -= 4;
console.log(ex2, " | Ex 2");
//=============//

var ex3 = 7;
var ex3_b = 2;
ex3 *= ex3_b;
console.log(ex3, " | Ex 3");
//=============//

var ex4 = 20;
ex4 /= 5;
console.log(ex4, " | Ex 4");
//=============//

var ex5 = 15;
var ex5_b = 4;
ex5 %= ex5_b;
console.log(ex5, " | Ex 5");