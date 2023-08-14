function tabuada() {
    var numero = document.getElementById(`txt-numero`);
    var select = document.getElementById(`select-tabuada`);

    if (numero.value.length == 0) {
        option.innerHTML = `[ERRO] Por favor, digite um número!`
    } else {
        var num = Number(numero.value);
        var contador = 1;
        select.innerHTML = ``;

        while (contador <= 10) {
            var item = document.createElement(`option`);
            item.text = `${num} X ${contador} = ${num*contador}`
            select.appendChild(item)
            contador++
        }
    }
}

function resetar() {
    document.getElementById(`txt-numero`).value = "";
    select = document.getElementById(`select-tabuada`);
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }

    var option = document.createElement('option');
    option.text = "Digite um número acima!";
    select.appendChild(option);
}
