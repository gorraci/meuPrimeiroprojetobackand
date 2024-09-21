// Importa o módulo Express, que é um framework para Node.js
const express = require("express")

// Cria um objeto Router do Express para definir rotas
const router = express.Router()

// Cria uma instância da aplicação Express
const app = express()

// Define a porta em que o servidor irá escutar
const porta = 3333

// Função que envia uma resposta "Olá, mundo!" quando chamada
function mostraOla(request, response) {
  response.send("Olá, mundo!")
}

// Função que exibe uma mensagem no console quando o servidor está rodando
function mostrarPorta() {
  // Imprime a mensagem com a porta em que o servidor está rodando
  console.log("Servidor criado e rodando na porta", porta)
}

// Define uma rota GET para a URL "/ola" que chama a função mostraOla
app.use(router.get("/ola", mostraOla))

// Inicia o servidor e faz com que ele escute na porta definida
// Quando o servidor começa a escutar, a função mostrarPorta é chamada
app.listen(porta, mostrarPorta) 