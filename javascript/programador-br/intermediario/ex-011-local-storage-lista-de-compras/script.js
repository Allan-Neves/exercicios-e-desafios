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


// const itemInput = document.getElementById("item");
// const listaitens = document.getElementById("listaItens");

// // Função para formatar o item, removendo espaços em branco no início e no final e deixando a primeira letra maiúscula e o resto minúscula
// function formatarItem(item) {
//     item = item.trim();
//     item = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
//     return item;
// }

// // Função para adicionar um item à lista
// function adicionarItem() {
//     // Recupera o valor do campo de entrada e formata o item
//     let item = itemInput.value;
//     item = formatarItem(item);

//     // Verifica se o item está vazio
//     if (item === "") {
//         alert("Por favor, digite algum item.");
//         itemInput.focus();
//         itemInput.select();
//         return;
//     }

//     // Recupera os itens existentes do localStorage ou inicializa uma lista vazia
//     const itens = JSON.parse(localStorage.getItem("itens")) || [];

//     // Verifica se o item já existe na lista
//     const index = itens.indexOf(item);
//     if (index !== -1) {
//         alert(`Este item já foi adicionado à lista. Ele está na posição número ${index + 1}.`);
//         itemInput.value = "";
//         itemInput.focus();
//         itemInput.select();
//         return;
//     }

//     // Adiciona o novo item à lista
//     itens.push(item);

//     // Atualiza o localStorage com a lista atualizada de itens
//     localStorage.setItem("itens", JSON.stringify(itens));

//     // Limpa o campo de entrada
//     itemInput.value = "";

//     // Atualiza a lista de itens exibida na página
//     exibirItens();
// }

// // Função para exibir as itens na lista
// function exibirItens() {
//     // Limpa a lista atual
//     listaitens.innerHTML = "";

//     // Recupera as itens do localStorage
//     const itens = JSON.parse(localStorage.getItem("itens")) || [];

//     // Adiciona cada item à lista usando um loop forEach
//     itens.forEach((item, i) => {
//         const itemElement = document.createElement("li");
//         itemElement.textContent = `${i + 1}. ${item}`;
//         listaitens.appendChild(itemElement);
//     });
// }

// // Função para remover o último item da lista
// function deletarUltimoItem() {
//     // Recupera as itens existentes do localStorage ou inicializa uma lista vazia
//     const itens = JSON.parse(localStorage.getItem("itens")) || [];

//     // Verifica se há itens para remover
//     if (itens.length > 0) {
//         // Remova o último item da lista
//         itens.pop();

//         // Atualiza o localStorage com a lista atualizada de itens
//         localStorage.setItem("itens", JSON.stringify(itens));

//         // Atualiza a lista de itens exibida na página
//         exibirItens();
//     } else {
//         alert("A lista de compras está vazia.");
//     }
// }

// // Adiciona um ouvinte de eventos para o botão "Adicionar"
// document.getElementById("adicionar").addEventListener("click", adicionarItem);

// // Adiciona um ouvinte de eventos para o botão "Deletar"
// document.getElementById("button2").addEventListener("click", deletarUltimoItem);

// // Adiciona um ouvinte de eventos para o campo de entrada para adicionar uma item ao pressionar Enter
// document.getElementById("item").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         adicionarItem();
//     }
// });

// // Exibe as itens ao carregar a página
// exibirItens();

// // código feito por IA, ainda estou tentando resolver sozinho