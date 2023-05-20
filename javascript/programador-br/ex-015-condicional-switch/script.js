var nota1 = 8;
var nota2 = 7;
var media = (nota1 + nota2) / 2;

var conceito = "";

if (media >= 8) {
    conceito = "ótimo";
}

else if (media >= 6.5) {
    conceito = "bom";
}

else {
    conceito = "regular";
}

// conceito = "mais ou menos";

console.log(media);
console.log("Conceito:", conceito);

switch (conceito) {
    case "ótimo":
        console.log("Parabéns, você é um ótimo aluno!");
        break;

    case "bom":
        console.log("Você está quase perfeito!");
        break;

    case "regular":
        console.log("Estude mais um pouco.");
        break;

    default:
        console.log("Houve algum erro.");
        break;
}