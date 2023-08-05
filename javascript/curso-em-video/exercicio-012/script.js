function carregar() {
    var msg = document.getElementById('msg');
    var foto = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        foto.src = 'images/manha.png'
        document.body.style.background = '#f1962d'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'images/tarde.png'
        document.body.style.background = '#ceb893'
    } else {
        foto.src = 'images/noite.png'
        document.body.style.background = '#295786'
    }

}