let tela = document.getElementById("tela");
let contexto = tela.getContext("2d");

contexto.moveTo(0, 0);
contexto.lineTo(500, 500);

contexto.lineWidth = 2;
contexto.stroke();
