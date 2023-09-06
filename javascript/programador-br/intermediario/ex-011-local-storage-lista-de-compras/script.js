// Função para adicionar uma tarefa à lista
function adicionarTarefa() {
    const tarefaInput = document.getElementById("tarefa");
    const tarefa = tarefaInput.value.trim(); // Remove espaços em branco

    if (tarefa === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    // Recupere as tarefas existentes do localStorage ou inicialize uma lista vazia
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    // Adicione a nova tarefa à lista
    tarefas.push(tarefa);

    // Atualize o localStorage com a lista atualizada de tarefas
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    // Limpe o campo de entrada
    tarefaInput.value = "";

    // Atualize a lista de tarefas exibida na página
    exibirTarefas();
}

// Função para exibir as tarefas na lista
function exibirTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");

    // Limpe a lista atual
    listaTarefas.innerHTML = "";

    // Recupere as tarefas do localStorage
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    // Adicione cada tarefa à lista usando um loop for
    for (let i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas[i];

        const item = document.createElement("li");
        item.textContent = `${i + 1}. ${tarefa}`;
        listaTarefas.appendChild(item);
    }
}

// Exiba as tarefas ao carregar a página
exibirTarefas();

// Adicione um ouvinte de eventos para o botão "Adicionar"
document.getElementById("adicionar").addEventListener("click", adicionarTarefa);


// código feito por IA, ainda estou tentando resolver sozinho