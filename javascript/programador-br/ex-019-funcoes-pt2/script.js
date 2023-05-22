
function saudacao() {
    return "Olá, Mundo!";
}

var s = saudacao;

console.log(s());

// ========================= \\

var media = function (n1, n2) {
    return (n1 + n2) / 2;
}

console.log(media(2, 3));

// ========================= \\

var media = function (n1, n2) {
    return (n1 + n2) / 2;
}

var m = media(5, 6);
console.log(m);

// ========================= \\

var media = (n1, n2) => {
    return (n1 + n2) / 2;
}

console.log(media(2, 3));