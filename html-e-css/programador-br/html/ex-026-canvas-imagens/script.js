let tela = document.getElementById("tela");
let contexto = tela.getContext("2d");
// let img = document.getElementById("monstrinho");

let img = new Image();
img.src = './images/monstrinho.jpg'
img.onload = desenharImg;

function desenharImg() {
contexto.drawImage(this, 20, 20, this.naturalWidth * 1.5, this.naturalHeight * 1.2);
}
