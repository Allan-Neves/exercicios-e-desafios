// var image = document.getElementById("sorvete");

// image.addEventListener("click", function () {
//     image.src = `./images/foto3.jpg`;
// });

// image.addEventListener("click", function () {
//     let lastImage = image.getAttribute("src");

//     image.setAttribute("src", "./images/foto3.jpg");
//     image.setAttribute("cor", "vermelho");

//     console.log(lastImage)
// });

var lista = document.getElementById("lista");
var num = lista.getAttribute("num");

var conteudo = ``;

for(let i = 0; i < num; i ++) {

    conteudo += `<li> ${i} </li>`;

    lista.innerHTML = conteudo;
}