/*const express = require ("express")

const app = express()
const porta = 3333
//const server = http.createServer(app)
function mostraPorta() 
{
  console.log("Servidor configurado e rodando na porta ", porta )
}
app.listen(porta, mostraPorta)*/

// Importa o módulo Express, que é um framework para Node.js
const express = require("express")

// Cria uma instância da aplicação Express
const app = express()

// Define a porta em que o servidor irá escutar
const porta = 3333

// Função que exibe uma mensagem no console quando o servidor está rodando
function mostraPorta() 
{
  // Imprime a mensagem com a porta em que o servidor está rodando
  console.log("Servidor configurado e rodando na porta ", porta)
}

// Inicia o servidor e faz com que ele escute na porta definida
// Quando o servidor começa a escutar, a função mostraPorta é chamada
app.listen(porta, mostraPorta)
