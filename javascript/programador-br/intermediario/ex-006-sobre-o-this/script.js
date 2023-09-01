let t1 = document.getElementById(`t1`);
let t2 = document.getElementById(`t2`);

t1.onmouseover = colocarEmMaiusculo;
t2.onmouseover = colocarEmMaiusculo;

t1.onmouseout = colocarEmMinuscula;
t2.onmouseout = colocarEmMinuscula;

function colocarEmMaiusculo() {
    this.innerHTML = this.innerHTML.toUpperCase()
}

function colocarEmMinuscula() {
    this.innerHTML = this.innerHTML.toLowerCase()
}