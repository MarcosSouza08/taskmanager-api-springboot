const API_URL = "http://localhost:8080/tasks";

let taskEmEdicao = null;

function obterDataAtual() {
  let hoje = new Date();

  let ano = hoje.getFullYear();
  let mes = String(hoje.getMonth() + 1).padStart(2, "0");
  let dia = String(hoje.getDate()).padStart(2, "0");

  return ano + "-" + mes + "-" + dia;
}

function carregarTasks() {
  fetch(API_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(tasks) {
      let lista = document.getElementById("taskList");
      lista.innerHTML = "";

      let tasksArray = Object.values(tasks);

      tasksArray.forEach(function(task) {
        let item = document.createElement("li");

        let infoTask = document.createElement("div");
        infoTask.classList.add("task-info");

        let tituloTask = document.createElement("h3");
        tituloTask.textContent = task.title || "Sem título";

        let descricaoTask = document.createElement("p");
        descricaoTask.textContent = "Descrição: " + (task.description || "Sem descrição");

        let statusTask = document.createElement("p");
        statusTask.textContent = "Status: " + (task.status || "PENDENTE");

        let dataTask = document.createElement("p");
        dataTask.textContent = "Data: " + (task.data || "Sem data");

        infoTask.appendChild(tituloTask);
        infoTask.appendChild(descricaoTask);
        infoTask.appendChild(statusTask);
        infoTask.appendChild(dataTask);

        let botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";

        botaoEditar.addEventListener("click", function() {
          editarTask(task);
        });

        let botaoStatus = document.createElement("button");
        botaoStatus.textContent = "Alterar status";

        botaoStatus.addEventListener("click", function() {
          alterarStatus(task);
        });

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";

        botaoExcluir.addEventListener("click", function() {
          excluirTask(task.id);
        });

        let areaBotoes = document.createElement("div");
        areaBotoes.classList.add("task-buttons");

        areaBotoes.appendChild(botaoEditar);
        areaBotoes.appendChild(botaoStatus);
        areaBotoes.appendChild(botaoExcluir);

        item.appendChild(infoTask);
        item.appendChild(areaBotoes);

        lista.appendChild(item);
      });
    })
    .catch(function(error) {
      console.error("Erro ao carregar tasks:", error);
    });
}

function editarTask(task) {
  let inputTitulo = document.getElementById("taskInput");
  let inputDescricao = document.getElementById("taskDescription");
  let botaoPrincipal = document.getElementById("addButton");

  inputTitulo.value = task.title || "";
  inputDescricao.value = task.description || "";
  taskEmEdicao = task;
  botaoPrincipal.textContent = "Salvar edição";
}

function alterarStatus(task) {
  let statusAtual = task.status || "PENDENTE";
  let novoStatus;

  if (statusAtual === "PENDENTE") {
    novoStatus = "CONCLUIDA";
  } else {
    novoStatus = "PENDENTE";
  }

  let taskAtualizada = {
    id: task.id,
    title: task.title || "Sem título",
    description: task.description || "Sem descrição",
    status: novoStatus,
    data: task.data || obterDataAtual()
  };

  fetch(API_URL + "/" + task.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskAtualizada)
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Erro ao alterar status");
      }

      return response.json();
    })
    .then(function(taskAtualizadaResposta) {
      console.log("Status atualizado:", taskAtualizadaResposta);
      carregarTasks();
    })
    .catch(function(error) {
      console.error("Erro ao alterar status:", error);
    });
}

function excluirTask(id) {
  fetch(API_URL + "/" + id, {
    method: "DELETE"
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Erro ao excluir task");
      }

      carregarTasks();
    })
    .catch(function(error) {
      console.error("Erro ao excluir task:", error);
    });
}

document.getElementById("addButton").addEventListener("click", function() {
  let texto = document.getElementById("taskInput").value.trim();
  let descricao = document.getElementById("taskDescription").value.trim();
  let botaoPrincipal = document.getElementById("addButton");

  if (texto === "") {
    return;
  }

  if (descricao === "") {
    descricao = "Sem descrição";
  }

  if (taskEmEdicao === null) {
    let novaTask = {
      title: texto,
      description: descricao,
      status: "PENDENTE",
      data: obterDataAtual()
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novaTask)
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Erro ao criar task");
        }

        return response.json();
      })
      .then(function(taskCriada) {
        console.log("Task criada:", taskCriada);
        document.getElementById("taskInput").value = "";
        document.getElementById("taskDescription").value = "";
        carregarTasks();
      })
      .catch(function(error) {
        console.error("Erro ao criar task:", error);
      });
  } else {
    let taskAtualizada = {
      id: taskEmEdicao.id,
      title: texto,
      description: descricao,
      status: taskEmEdicao.status || "PENDENTE",
      data: taskEmEdicao.data || obterDataAtual()
    };

    fetch(API_URL + "/" + taskEmEdicao.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskAtualizada)
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Erro ao editar task");
        }

        return response.json();
      })
      .then(function(taskEditada) {
        console.log("Task editada:", taskEditada);
        document.getElementById("taskInput").value = "";
        document.getElementById("taskDescription").value = "";
        taskEmEdicao = null;
        botaoPrincipal.textContent = "Adicionar";
        carregarTasks();
      })
      .catch(function(error) {
        console.error("Erro ao editar task:", error);
      });
  }
});

carregarTasks();