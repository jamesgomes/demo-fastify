# Demo Fastify
Demo Fastify é um projeto para demonstrar o uso do pacote Fastify na criação de servidores web em Node.js. Ele inclui um exemplo simples de como criar rotas, autenticar usuários com JWT e processar solicitações HTTP.

## Pré-requisitos
- Node.js 18 ou superior
- NPM ou Yarn
## Instalação
- Clone o repositório:
```sh
git clone https://github.com/jamesgomes/demo-fastify.git
```
- Instale as dependências do projeto:
```sh
cd demo-fastify
npm install # ou yarn install
```
 - Inicie a aplicação:
```sh
npm start # ou yarn start
```
A aplicação estará disponível em http://localhost:3000.

## Utilização
A aplicação possui duas rotas:

- GET /notifications: Retorna uma lista de notificações para o usuário autenticado.
- POST /notifications: Cria uma nova notificação no banco de dados com base nos dados fornecidos na requisição.

Ambas as rotas exigem autenticação JWT. Para autenticar, é necessário enviar um token JWT válido no cabeçalho de autorização da solicitação.

## Tecnologias
A aplicação foi construída com as seguintes tecnologias:

- Node.js
- Fastify
- JWT
## Licença
Este projeto está licenciado sob a MIT License.