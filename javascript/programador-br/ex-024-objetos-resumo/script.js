function obj(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

var a = obj("Allan", "Neves");
console.log(a.nome);

// ======================== \\

function objeto(n, s) {
    this.nome = n;
    this.sobrenome = s
}

var al = new objeto("Igor", "Oliveira")
console.log(al["nome"], al["sobrenome"])