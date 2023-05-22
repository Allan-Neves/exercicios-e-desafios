// Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado

var alunos = ["Allan", "Igor", "Joana", "Maria"];
var notasA = [9.0, 6.5, 7.8, 4.3];
var notasB = [5.5, 8.0, 5.0, 9.4];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function resultado(media) {
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

for (var index in alunos) {

    var aluno = alunos[index];
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(aluno + " - " + nota1 + " - " + nota2 + " - " + m + " - " + resultado(m));
}