function verificacao() {
    var pais = document.querySelector('input#pais');
    var resultado = document.querySelector('p#res');

    if (pais.value == 'Brasil') {
        resultado.innerHTML = `Você é <strong>brasileiro(a)</strong>!`
    } else {
        resultado.innerHTML = `Você é <strong>estrangeiro(a)</strong>!`
    }
}