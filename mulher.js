/*// Importa o módulo express
const express = require("express");
const { v4: uuidv4 } = require('uuid');

// Cria uma instância do aplicativo Express
const app = express();
const router = express.Router();

// Configura o middleware para análise de JSON
app.use(express.json());

// Define a porta na qual o servidor irá ouvir
const porta = 3333;

// Cria uma lista de objetos representando mulheres com informações como nome, imagem e mini-bio
const mulheres = [
  {
    id: "1",
    nome: 'Simara Conceição',
    imagem: 'https://bit.ly/3LJIyOF',
    minibio: 'Desenvolvedora e instrutora',
  },
  {
    id: "2",
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3JCXBqP',
    minibio: 'CEO & Founder da PrograMaria',
  },
  {
    id: "3",
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Senior Staff Software Engineer',
  },
  {
    id: "4",
    nome: 'Isadora Alves',
    imagem: 'https://example.com/minha-filha', // Corrigir com uma URL válida
    minibio: 'Senior Staff Software Engineer',
  }
];

// Função para enviar a lista de mulheres como resposta JSON
function mostraMulheres(request, response) {
  response.json(mulheres);
}

// Função para criar e adicionar uma nova mulher à lista
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
  };
  mulheres.push(novaMulher);
  response.json(novaMulher);
}

// Define uma rota GET para o caminho '/mulheres' que usa a função mostraMulheres
router.get('/mulheres', mostraMulheres);

// Define uma rota POST para o caminho '/mulheres' que usa a função criaMulher
router.post('/mulheres', criaMulher);

// Usa o roteador
app.use(router);

// Função para exibir uma mensagem quando o servidor começar a rodar
function mostraPorta() {
  console.log(`Servidor está rodando na porta ${porta}`);
}

// Inicia o servidor na porta definida e chama a função mostraPorta quando o servidor estiver pronto
app.listen(porta, mostraPorta);


Gabarito💻*/

const express = require("express")

const router = express.Router()



const app = express()

const porta = 3333



function mostraMulher(request, response) {

 response.json({

    nome: 'Simara Conceição',

    imagem: 'https://github.com/simaraconceicao.png',

    minibio: 'Desenvolvedora e instrutora',

 })

}

function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}

app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)