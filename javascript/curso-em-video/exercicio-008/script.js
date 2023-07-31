function somar() {
    var tn1 = window.document.getElementById('txtn1');    
    var tn2 = window.document.querySelector('input#txtn2');
    var resultado = window.document.getElementById('resultado');
    var n1 = Number(tn1.value);    
    var n2 = Number(tn2.value);
    var soma = n1 + n2;

    resultado.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${soma}</strong>`;
}