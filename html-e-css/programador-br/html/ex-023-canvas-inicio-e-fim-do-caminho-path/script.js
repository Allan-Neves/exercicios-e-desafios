let tela = document.getElementById("tela");
let contexto = tela.getContext("2d");

contexto.beginPath();
contexto.lineWidth = 4;
contexto.strokeStyle = "red";
contexto.moveTo(10, 10);
contexto.lineTo(400, 300);
contexto.stroke();

contexto.beginPath();
contexto.lineWidth = 7;
contexto.strokeStyle = "blue";
contexto.fillStyle = "green";
contexto.moveTo(50, 10);
contexto.lineTo(300, 300);
contexto.lineTo(200, 300);
contexto.closePath();
contexto.stroke();
contexto.fill();
