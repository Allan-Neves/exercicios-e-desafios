var amigo = {
    nome: `José`,
    sexo: `Masculino`,
    peso: 83.4,
    engordar(p = 0) {
        console.log(`Engordou`);
        this.peso += p;
    }
};

amigo.engordar(20)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)