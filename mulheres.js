const express = require("express");

const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
  {
    "id": 1,
    "nome": "Maria",
    "idade": 25,
    "mini bio": "desenvolvedor"  // Corrigido para string e adicionado vírgula
  },
  {
    "id": 2,
    "nome": "Joana",
    "idade": 30,
    "mini bio": "desenvolvedora"  // Corrigido para string e adicionado vírgula
  },
  {
    "id": 3,
    "nome": "Beatriz",
    "idade": 35,
    "mini bio": "desenvolvedora"  // Corrigido para string e adicionado vírgula
  },
  {
    "id": 4,
    "nome": "Ana",
    "idade": 20,
    "mini bio": "desenvolvedora"  // Corrigido para string
  },
  {
    "id":5,
    "nome":"GIOVANI",
    "idade":48,
    "mini bio":"Corintiano"
  },
];

function mostraMulheres(request, response) {
  response.json(mulheres);
}

function mostrarPorta() {
  console.log("Servidor criado e rodando na porta", porta);  // Corrigido para console
}

// Defina a rota corretamente usando o roteador
router.get("/mulheres", mostraMulheres);

app.use(router);

app.listen(porta, mostrarPorta);
