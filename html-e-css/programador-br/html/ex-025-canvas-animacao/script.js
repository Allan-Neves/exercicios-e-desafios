let tela = document.getElementById("tela");
let contexto = tela.getContext("2d");

let circle = {
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 0,
  antiHora: false,
};

function drawCircle(c) {
  contexto.beginPath();
  contexto.rect(0, 0, 500, 500);
  contexto.fillStyle = "beige";
  contexto.fill();

  contexto.beginPath();
  contexto.strokeStyle = "red";
  contexto.lineWidth = 4;
  contexto.fillStyle = "blue";
  contexto.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHora);

  contexto.fill();
  contexto.stroke();
}

setInterval(function () {
  if (circle.fim < 2 * Math.PI) {
    circle.fim += 0.2;
    circle.x += 4.5;
    circle.y += 4.5;
  }

  drawCircle(circle);
}, 30);
