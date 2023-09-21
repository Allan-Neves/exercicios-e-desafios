let tela = document.getElementById("tela");
let contexto = tela.getContext("2d");

contexto.rect(10, 10, 100, 100);

contexto.fillStyle = "blue";
// contexto.fillRect(10, 30, 100, 200);

contexto.strokeStyle = "red";
contexto.lineWidth = 5;
// contexto.strokeRect(10, 30, 100, 200);

contexto.fill();
contexto.stroke();

contexto.clearRect(20, 20, 30, 30);
contexto.clearRect(67, 20, 30, 30);
contexto.clearRect(20, 67, 30, 30);
contexto.clearRect(67, 67, 30, 30);
