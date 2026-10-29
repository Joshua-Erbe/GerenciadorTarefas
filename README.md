# Gerenciador de Tarefas

API de estudo para um gerenciador de tarefas, desenvolvida em Node.js com MySQL. O projeto está em fase de desenvolvimento e ainda não está finalizado.

## Tecnologias

- JavaScript
- Node.js
- MySQL
- [mysql2](https://www.npmjs.com/package/mysql2) para a conexão com o banco
- [dotenv](https://www.npmjs.com/package/dotenv) para as variáveis de ambiente

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- MySQL em execução
- Um banco de dados criado para o projeto

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd gerenciador-de-tarefas
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis de conexão com o banco:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

## Execução

```bash
node <arquivo-principal>.js
```

## Estrutura do projeto

```
src/
├── connect.js        # Criação do pool de conexões com o MySQL
└── ...               # Rotas, controllers e demais módulos
```

## Status

Projeto em desenvolvimento. Funcionalidades, rotas e a estrutura podem mudar.