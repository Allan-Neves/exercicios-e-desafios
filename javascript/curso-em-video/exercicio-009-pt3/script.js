function calcular() {
    var vel = document.getElementById('velocidade');
    var velocidade = Number(vel.value);
    var res = document.querySelector('p#calc-vel');
    var info = document.querySelector('p#resultado');
    res.innerHTML = `Sua velocidade atual é de <strong>${velocidade}Km/h</strong>`

    if (velocidade > 60) {
        info.innerHTML = `Você foi multado!`
    } else {
        info.innerHTML = `Você está dentro dos limites de velocidade!`
    }
}