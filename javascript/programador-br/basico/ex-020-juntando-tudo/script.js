// Nome do aluno - nota1 - nota 2 - media - resultado

var alunos = ["José", "Maria", "Pedro", "Marta",];
var notasA = [9.0, 3.0, 7.0, 5,0];
var notasB = [4.0, 5.0, 10.0, 7.0];

function media(n1, n2) {
    return (n1 + n2) / 2;
}

function resultado(media) {
    if (media >= 6.5) {
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

    var text = document.createElement(`p`);
    document.body.appendChild(text);
    text.innerHTML = `<strong>${aluno}</strong> | nota A: ${nota1} | nota B: ${nota2} | média: ${m} - <strong>${resultado(m)}</strong>`;
}