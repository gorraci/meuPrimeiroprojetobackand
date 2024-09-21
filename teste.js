const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
const router = express.Router();

// Lista de mulheres (exemplo)
const mulheres = [
  { id: uuidv4(), nome: 'Maria', idade: 25, minibio: 'Desenvolvedora', imagem: 'url-imagem-maria' },
  { id: uuidv4(), nome: 'Joana', idade: 30, minibio: 'Designer', imagem: 'url-imagem-joana' },
];

// Função para corrigir os dados de uma mulher
function corrigeMulher(request, response) {
  const mulherEncontrada = mulheres.find(mulher => mulher.id === request.params.id);

  // Verifica se a mulher foi encontrada
  if (!mulherEncontrada) {
    return response.status(404).json({ mensagem: "Mulher não encontrada" });
  }

  // Atualizando os dados conforme fornecido no corpo da requisição
  if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome;
  }

  if (request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio;
  }

  if (request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem;
  }

  // Retorna a lista atualizada de mulheres
  response.json(mulheres);
}

// Configurando a rota PATCH
router.patch('/mulheres/:id', corrigeMulher);
app.use(router);

// Inicializando o servidor
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor criado e rodando na porta ${PORT}`);
});


