// console.log(document);
// console.log(document.body);
// document.body.innerHTML = "<h1>Esse título foi inserido via JS</h1>" + document.body.innerHTML;
// console.log(document)

// let p1 = document.getElementById("paragrafo-1");
// let paragrafos = document.getElementsByClassName("paragrafo");

// console.log(p1);
// console.log(paragrafos);

let tp = document.getElementsByTagName("p");

console.log(tp);

let paragrafo = document.getElementById("paragrafo-1");
paragrafo.style = "color: blue";
paragrafo.style.backgroundColor = "red";
