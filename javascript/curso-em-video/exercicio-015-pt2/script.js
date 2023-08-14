var valores = [1, 3, 6, 8, 2];

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
// }

for (let pos in valores) {
    valores.sort();
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}