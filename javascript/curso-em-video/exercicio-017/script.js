var numero = document.getElementById(`form-numero`);
var lista = document.getElementById(`lista`);
var resultado = document.getElementById(`resultado`);
var valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement(`option`);
        item.text = `Valor ${numero.value} adicionado!`
        lista.appendChild(item);
        resultado.innerHTML = ``;
    } else {
        alert(`Valor inválido, ou já adicionado na tabela!`);
    }

    numero.value = ``;
    numero.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione algum número antes de finalizar!`);
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let posicao in valores) {
            soma += valores[posicao];

            if (valores[posicao] > maior) {
                maior = valores[posicao];
            }

            if (valores[posicao] < menor) {
                menor = valores[posicao];
            }
        }

        media = soma / total;
        resultado.innerHTML = ``;
        resultado.innerHTML += `<p>Ao todo, temos <strong>${total}</strong> número cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor inserido foi <strong>${maior}.</strong></p>`;
        resultado.innerHTML += `<p>O menor valor inserido foi <strong>${menor}.</strong></p>`;
        resultado.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}.</strong></p>`;
        resultado.innerHTML += `<p>a média dos valores inseridos é <strong>${media}.</strong></p>`;
    }
}