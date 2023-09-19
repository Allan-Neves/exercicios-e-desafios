let audio = document.getElementById("audio");
let controle = document.getElementById("controle");
let container = document.getElementById("container");
let btnPlay = document.getElementById("btn-play");
let tocando = false;

audio.volume = 0.4;

container.addEventListener("mouseenter", mostrarControles);
container.addEventListener("mouseleave", ocultarControles);

function mostrarControles() {
    controle.style.opacity = 1;
    controle.style.transition = "all .3s"
}

function ocultarControles() {
    controle.style.opacity = 0;
    controle.style.transition = "all 1s"
}

function retroceder() {
    audio.currentTime -= 15;
}

function avancar() {
    audio.currentTime += 15;
}

function diminuirVolume() {
    audio.volume -= 0.3;
}

function aumentarVolume() {
    audio.volume += 0.3;
}

function play() {
    if (tocando) {
        audio.pause();
        btnPlay.src = "./assets/play.png";

        btnPlay.setAttribute("title", "Tocar");
    } else {
        audio.play();
        btnPlay.src = "./assets/pausar.png";

        btnPlay.setAttribute("title", "Pausar");
    }

    tocando = !tocando;
}

function stop() {
    audio.pause();
    audio.currentTime = 0;

    btnPlay.src = "./assets/play.png";
    btnPlay.setAttribute("title", "Tocar");
    tocando = !tocando;
}