# Task Manager — Full Stack (English)

A full stack task management application with a REST API backend built with Java and Spring Boot, and a frontend built with HTML, CSS, and JavaScript.

## Technologies

**Backend**
- Java 25
- Spring Boot 3.5
- Spring Data JPA + Hibernate
- MySQL
- Maven

**Frontend**
- HTML
- CSS
- JavaScript

## Features

- Create a task
- List all tasks
- Get task by ID
- Update a task
- Delete a task
- Change task status
- Add and edit task description
- Persist data in MySQL

## Project Structure

```
taskmanagerapi/
├── src/
│   └── main/
│       └── java/
│           └── com/marcos/taskmanagerapi/
│               ├── controller/   → receives HTTP requests
│               ├── service/      → business logic
│               ├── repository/   → database communication
│               └── model/        → Task entity
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── pom.xml
```

## How to Run

### Prerequisites

- Java 25
- Maven
- MySQL (XAMPP recommended)

### Setup

1. Clone the repository
2. Create a database named `gerenciamento_de_tarefas`
3. Configure the environment variables:

```
DB_URL=jdbc:mysql://localhost:3306/gerenciamento_de_tarefas
DB_USERNAME=admin_taskapp
DB_PASSWORD=your_password
```

4. Run `TaskManagerApplication.java`
5. The API will be available at `http://localhost:8080`
6. Open `frontend/index.html` in your browser

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | List all tasks |
| GET | /tasks/{id} | Get task by ID |
| POST | /tasks | Create a task |
| PUT | /tasks/{id} | Update a task |
| PUT | /tasks/{id}/status | Update task status |
| DELETE | /tasks/{id} | Delete a task |

---

# Task Manager — Full Stack (Português)

Aplicação full stack de gerenciamento de tarefas com backend em API REST com Java e Spring Boot, e frontend em HTML, CSS e JavaScript.

## Tecnologias

**Backend**
- Java 25
- Spring Boot 3.5
- Spring Data JPA + Hibernate
- MySQL
- Maven

**Frontend**
- HTML
- CSS
- JavaScript

## Funcionalidades

- Criar uma tarefa
- Listar todas as tarefas
- Buscar tarefa por ID
- Atualizar uma tarefa
- Deletar uma tarefa
- Alterar status da tarefa
- Adicionar e editar descrição da tarefa
- Persistir dados no MySQL

## Estrutura do Projeto

```
taskmanagerapi/
├── src/
│   └── main/
│       └── java/
│           └── com/marcos/taskmanagerapi/
│               ├── controller/   → recebe as requisições HTTP
│               ├── service/      → lógica de negócio
│               ├── repository/   → comunicação com o banco
│               └── model/        → entidade Task
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── pom.xml
```

## Como Executar

### Pré-requisitos

- Java 25
- Maven
- MySQL (recomendado XAMPP)

### Configuração

1. Clone o repositório
2. Crie um banco de dados chamado `gerenciamento_de_tarefas`
3. Configure as variáveis de ambiente:

```
DB_URL=jdbc:mysql://localhost:3306/gerenciamento_de_tarefas
DB_USERNAME=admin_taskapp
DB_PASSWORD=sua_senha
```

4. Execute o arquivo `TaskManagerApplication.java`
5. A API estará disponível em `http://localhost:8080`
6. Abra o arquivo `frontend/index.html` no navegador

## Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /tasks | Lista todas as tarefas |
| GET | /tasks/{id} | Busca tarefa por ID |
| POST | /tasks | Cria uma tarefa |
| PUT | /tasks/{id} | Atualiza uma tarefa |
| PUT | /tasks/{id}/status | Atualiza o status da tarefa |
| DELETE | /tasks/{id} | Deleta uma tarefa |

---

> Este projeto começou como uma API REST simples e evoluiu para uma aplicação full stack com frontend integrado. A versão original, desenvolvida com Java puro e armazenamento em memória, pode ser encontrada em [Task-Manager-API-Java](https://github.com/MarcosSouza08/Task-Manager-API-Java).
