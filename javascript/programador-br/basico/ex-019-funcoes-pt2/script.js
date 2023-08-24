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

var media1 = function (n1, n2) {
    return (n1 + n2) / 2;
}

var m = media1(5, 6);
console.log(m);

// ========================= \\

var media2 = (n1, n2) => {
    return (n1 + n2) / 2;
}

console.log(media2(2, 3));