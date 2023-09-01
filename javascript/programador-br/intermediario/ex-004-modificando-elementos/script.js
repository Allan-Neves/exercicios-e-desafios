let p1 = document.getElementById(`p1`);
let p2 = document.getElementById(`p2`);
let p3 = document.getElementById(`p3`);

// p1.innerHTML = `Novo conteúdo`;
// p2.innerText = `Conteúdo mais novo`;
// p3.textContent = `Mais novo ainda`;

// p3.textContent = `<h2>Tem um h2 dentro do p</h2>`; // seria o mesmo se usa-se o innerText
// p1.innerHTML = `<h2>Tem um h2 dentro do p</h2>`;

p1 = p1.textContent;
console.log(p1);

// ================================= \\

p2.className = ``;
p2.style = `color: red;`;

// ================================= \\

let meuAtt = p3.getAttribute("meuAtt");
console.log(meuAtt);

p3.setAttribute("meuAtt", "Outro nome");
p3.setAttribute("outroAtt", "Qualquer coisa");
console.log(p3);
