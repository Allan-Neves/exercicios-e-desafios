let tela = document.getElementById("tela");
let contexto = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI;

contexto.beginPath();
contexto.strokeStyle = "blue";
contexto.lineWidth = 6;
contexto.fillStyle = 'red'
contexto.arc(x, y, raio, inicio, fim);

contexto.fill();
contexto.stroke();