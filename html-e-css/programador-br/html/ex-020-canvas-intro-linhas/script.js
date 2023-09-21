let tela = document.getElementById("tela");
let contexto = tela.getContext("2d");

contexto.moveTo(0, 0);
contexto.lineTo(500, 500);

contexto.moveTo(500, 0);
contexto.lineTo(0, 500);

contexto.lineWidth = 2;
contexto.strokeStyle = "#ff0000";
contexto.stroke();
