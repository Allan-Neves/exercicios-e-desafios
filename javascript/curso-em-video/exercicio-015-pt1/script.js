var num = [1, 2, 3, 5];
num[4] = 4;
num.push(6);
num.sort();

console.log(num);
console.log(`Nosso vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do nosso vetor é ${num[0]}`);

let pos = num.indexOf(5);
if (pos == -1) {
    console.log(`Valor não encontrado.`);
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}