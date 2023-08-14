function parimpar(n) {
    if (n % 2 == 0) {
        return `O número é par!`
    } else {
        return `O número é ímpar!`
    }
}

console.log(parimpar(2));

// ============================================= \\

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(8))

// ============================================= \\

var v = function(x) {
    return x * 2
}

console.log(v(5))

// ============================================= \\

// Tradicional
// function fatorial(n) {
//     let fat = 1;

//     for (let contador = n; contador > 1; contador--) {
//         fat *= contador;
//     } return fat
// }

// console.log(fatorial(5))

// Recursividade
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))