function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nAno = document.querySelector(`input#nascimento-data`);
    var resultado = document.querySelector(`div#resultado`);

    if (nAno.value.length == 0 || Number(nAno.value) > ano) {
        window.alert(`[ERRO] Verifique os dados inseridos, e tente novamente!`);
    } else {
        var sex = document.getElementsByName(`sex`);
        var idade = ano - Number(nAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (sex[0].checked) {
            genero = `Homem`;

            if (idade < 4) {
                img.setAttribute('src', 'images/bebe-masc.png');
            } else if (idade < 10) {
                img.setAttribute('src', 'images/criança-masc.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'images/jovem-masc.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulto-masc.png');
            } else if (idade < 110) {
                img.setAttribute('src', 'images/idoso-masc.png');
            } else {
                img.setAttribute('src', 'images/esqueleto.png');
            }

        } else if (sex[1].checked) {
            genero = `Mulher`;

            if (idade < 4) {
                img.setAttribute('src', 'images/bebe-fem.png');
            } else if (idade < 10) {
                img.setAttribute('src', 'images/criança-fem.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'images/jovem-fem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adulta-fem.png');
            } else if (idade < 110) {
                img.setAttribute('src', 'images/idosa-fem.png');
            } else {
                img.setAttribute('src', 'images/esqueleto.png');
            }
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(img);
    }
}