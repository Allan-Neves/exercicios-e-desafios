// Nome do aluno - nota1 - nota 2 - media - resultado

var alunos = ["José", "Maria", "Pedro", "Marta",];
var notasA = [9.0, 3.0, 7.0, 5,0];
var notasB = [4.0, 5.0, 10.0, 3.0];

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

    console.log(`${aluno} - ${nota1} - ${nota2} - ${m} - ${resultado(m)}`)
}