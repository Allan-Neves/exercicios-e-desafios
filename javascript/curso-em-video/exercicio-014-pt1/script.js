function contar() {
    let inicio = document.getElementById(`txt-inicio`);
    let fim = document.getElementById(`txt-fim`);
    let passo = document.getElementById(`txt-passo`);
    let resultado = document.getElementById(`resultado`);

    if (inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
        resultado.innerHTML = `[ERRO] Você deve preencher <strong>todos os dados</strong>!`
    } else if (inicio.value.length == 0 && fim.value.length == 0) {
        resultado.innerHTML = `[ERRO] Os inputs de <strong>início</strong> e <strong>fim</strong> devem estar preenchidos!`
    } else if (inicio.value.length == 0 && passo.value.length == 0) {
        resultado.innerHTML = `[ERRO] Os inputs de <strong>início</strong> e <strong>passo</strong> devem estar preenchidos!`
    } else if (fim.value.length == 0 && passo.value.length == 0) {
        resultado.innerHTML = `[ERRO] Os inputs de <strong>fim</strong> e <strong>passo</strong> devem estar preenchidos!`
    } else if (inicio.value.length == 0) {
        resultado.innerHTML = `[ERRO] O input de <strong>início</strong> deve estar preenchido!`
    } else if (fim.value.length == 0) {
        resultado.innerHTML = `[ERRO] O input de <strong>fim</strong> deve estar preenchido!`
    } else if (passo.value.length == 0) {
        resultado.innerHTML = `[ERRO] O input de <strong>passo</strong> deve estar preenchido!`
    } else if (Number(passo.value) == 0) {
        resultado.innerHTML = `[ERRO] O input de <strong>passo</strong> deve ser <strong>diferente de zero</strong>!`
    } else {
        resultado.innerHTML = `Contando:`;

        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            resultado.innerHTML = `[ERRO] O input de <strong>passo</strong> deve ser <strong>maior que zero</strong>! Considerando <strong>PASSO = 1</strong> <br><br>`
            p = 1;
        }

        if (i < f) {
            // Contagem progressiva
            for (let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += ` ${contador} \u{1F449}`;
            }
        } else {
            for (let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += ` ${contador} \u{1F449}`;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    }
}

function resetar() {
    let inicio = document.getElementById(`txt-inicio`).value = "";
    let fim = document.getElementById(`txt-fim`).value = "";
    let passo = document.getElementById(`txt-passo`).value = "";
    let resultado = document.getElementById(`resultado`).value = "";
}