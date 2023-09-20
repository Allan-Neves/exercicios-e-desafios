let video = document.getElementById("video-1");
let container = document.getElementById("container");
let controle = document.getElementById("controle");
let btnPlay = document.getElementById("btn-play");
let tocando = false;

container.addEventListener("mouseover", mostrarControles);
container.addEventListener("mouseleave", ocultarControles);

function mostrarControles() {
  controle.style.opacity = 1;
  controle.style.transition = "all 0.3s";
}

function ocultarControles() {
  controle.style.opacity = 0;
  controle.style.transition = "all 1s";
}

function retroceder() {
  video.currentTime -= -15;
}

function avancar() {
  video.currentTime += 15;
}

function diminuirVelocidade() {
  video.playbackRate -= 0.1;
}

function aumentarVelocidade() {
  video.playbackRate += 0.1;
}

function play() {
  if (tocando) {
    video.pause();
    btnPlay.src = `assets/play.png`;

    btnPlay.setAttribute("title", "Tocar");
  } else {
    video.play();
    btnPlay.src = `assets/pausar.png`;

    btnPlay.setAttribute("title", "Pausar");
  }
  tocando = !tocando;
}

function stop() {
  video.pause();
  video.currentTime = 0;

  btnPlay.src = `assets/play.png`;
  btnPlay.setAttribute("title", "Tocar");
  tocando = !tocando;
}

function diminuirVolume() {
  video.volume -= 0.1;
}

function aumentarVolume() {
  video.volume += 0.1;
}