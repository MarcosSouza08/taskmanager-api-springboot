# Task Manager API (English)

A REST API for task management built with Java, Spring Boot, and MySQL.

## Technologies
- Java 25
- Spring Boot 3.5
- Spring Data JPA
- MySQL
- Hibernate
- Maven

## Features
- Create a task
- List all tasks
- Get task by ID
- Update a task
- Delete a task

## Project Structure
```
src/
└── main/
    └── java/
        └── com.marcos.taskmanagerapi/
            ├── controller/   → receives HTTP requests
            ├── service/      → business logic
            ├── repository/   → database communication
            └── model/        → Task entity
```

## How to run

### Prerequisites
- Java 25 or 21
- Maven
- MySQL (XAMPP recommended)

### Setup
1. Clone the repository
2. Create a database named `taskmanagerdb`
3. Configure the environment variables:
```
DB_URL=jdbc:mysql://localhost:3306/taskmanagerdb
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

4. Run `TaskManagerApplication.java`
5. API will be available at `http://localhost:8080`

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | List all tasks |
| GET | /tasks/{id} | Get task by ID |
| POST | /tasks | Create a task |
| PUT | /tasks/{id} | Update a task |
| DELETE | /tasks/{id} | Delete a task |

---

# Task Manager API (Português)

API REST de gerenciamento de tarefas desenvolvida com Java, Spring Boot e MySQL.

## Tecnologias
- Java 25
- Spring Boot 3.5
- Spring Data JPA
- MySQL
- Hibernate
- Maven

## Funcionalidades
- Criar uma tarefa
- Listar todas as tarefas
- Buscar tarefa por ID
- Atualizar uma tarefa
- Deletar uma tarefa

## Estrutura do projeto
```
src/
└── main/
    └── java/
        └── com.marcos.taskmanagerapi/
            ├── controller/   → recebe as requisições HTTP
            ├── service/      → lógica de negócio
            ├── repository/   → comunicação com o banco
            └── model/        → entidade Task
```

## Como executar

### Pré-requisitos
- Java 25 ou 21
- Maven
- MySQL (recomendado XAMPP)

### Configuração
1. Clone o repositório
2. Crie um banco de dados chamado `taskmanagerdb`
3. Configure as variáveis de ambiente:
```
DB_URL=jdbc:mysql://localhost:3306/taskmanagerdb
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

4. Execute o arquivo `TaskManagerApplication.java`
5. A API estará disponível em `http://localhost:8080`

## Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /tasks | Lista todas as tarefas |
| GET | /tasks/{id} | Busca tarefa por ID |
| POST | /tasks | Cria uma tarefa |
| PUT | /tasks/{id} | Atualiza uma tarefa |
| DELETE | /tasks/{id} | Deleta uma tarefa |

---

> This project is an evolution of [taskmanager-api-java][(https://github.com/MarcosSouza08/Task-Manager-API-Java)], built with pure Java and in-memory storage.
