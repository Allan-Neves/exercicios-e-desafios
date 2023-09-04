var formulario = document.getElementById("formulario");
var item = document.getElementById("item");
var adicionar = document.getElementById("adicionar");
var remover = document.getElementById("remover");
var lista = document.getElementById("lista");

function adicionarItem(event) {
    event.preventDefault();

    let valor = item.value;

    if (valor) {
        let li = document.createElement("li");

        li.textContent = valor;

        lista.appendChild(li);

        item.value = ``;
    }
}

adicionar.addEventListener("click", adicionarItem)