// Importa o módulo express
const express = require("express");

// Cria um roteador Express
const router = express.Router();

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta na qual o servidor irá ouvir
const porta = 3333;

// Cria uma lista de objetos representando mulheres com informações como nome, imagem e mini-bio
const mulheres = [
  {
    nome: 'Simara Conceição',
    imagem: 'https://bit.ly/3LJIyOF',
    minibio: 'Desenvolvedora e instrutora',
  },
  {
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3JCXBqP',
    minibio: 'CEO & Founder da PrograMaria',
  },
  {
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Senior Staff Software Engineer',
  },
  {
    nome: 'Isadora alves',
    imagem: 'minha filha',
    minibio: 'Senior Staff Software Engineer',
  }

];

// Função para enviar a lista de mulheres como resposta JSON
function mostraMulheres(request, response) {
  response.json(mulheres);
}

// Função para exibir uma mensagem quando o servidor começar a rodar
function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

// Define uma rota GET no roteador para o caminho '/mulheres' que usa a função mostraMulheres
app.use(router.get('/mulheress', mostraMulheres));

// Inicia o servidor na porta definida e chama a função mostraPorta quando o servidor estiver pronto
app.listen(porta, mostraPorta);
