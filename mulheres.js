const express = require("express"); // Iniciando Express
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); // Importa MongoClient para usar MongoDB diretamente

// Cria uma instância da aplicação Express
const app = express();
const porta = 3333; // Definindo a porta

// Middleware para parsear o corpo das requisições
app.use(express.json()); // Permite receber dados JSON no body

// Conectar ao MongoDB
const uri = "mongodb+srv://giovanibolaa:R7V6SZoUjktSv5FU@mulheresti.257gh.mongodb.net/?retryWrites=true&w=majority&appName=MULHERESTI";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function conectaBancoDeDados() {
  try {
    console.log("Conexão com o banco de dados iniciou");
    await client.connect(); // Conecta ao MongoDB
    console.log("Conexão com o banco de dados foi bem sucedida");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
}

// Função que retorna a lista de mulheres em formato JSON
async function mostraMulheres(request, response) {
  try {
    const collection = client.db("MULHERESTI").collection("mulheres");
    const mulheres = await collection.find().toArray(); // Recupera todas as mulheres da coleção
    response.json(mulheres);
  } catch (error) {
    response.status(500).json({ mensagem: "Erro ao buscar mulheres", error });
  }
}

// Função para criar uma nova mulher
async function criaMulher(request, response) {
  const novaMulher = {
    nome: request.body.nome,
    idade: request.body.idade,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao,
  };

  try {
    const collection = client.db("MULHERESTI").collection("mulheres");
    const result = await collection.insertOne(novaMulher); // Insere uma nova mulher na coleção
    response.status(201).json(result);
  } catch (error) {
    response.status(400).json({ mensagem: "Erro ao criar mulher", error });
  }
}

// Função que atualiza os dados de uma mulher
async function corrigeMulher(request, response) {
  const id = request.params.id;

  try {
    const collection = client.db("MULHERESTI").collection("mulheres");
    const mulherAtualizada = {
      $set: {
        nome: request.body.nome,
        idade: request.body.idade,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,
      }
    };

    const result = await collection.updateOne({ _id: new ObjectId(id) }, mulherAtualizada); // Atualiza a mulher com base no ID
    if (result.matchedCount === 0) {
      return response.status(404).json({ mensagem: "Mulher não encontrada" });
    }
    response.json(result);
  } catch (error) {
    response.status(400).json({ mensagem: "Erro ao atualizar mulher", error });
  }
}

// Função que deleta uma mulher
async function deletaMulher(request, response) {
  const id = request.params.id;

  try {
    const collection = client.db("MULHERESTI").collection("mulheres");
    const result = await collection.deleteOne({ _id: new ObjectId(id) }); // Deleta a mulher com base no ID
    if (result.deletedCount === 0) {
      return response.status(404).json({ mensagem: "Mulher não encontrada" });
    }
    response.status(204).send(); // Resposta sem conteúdo (204)
  } catch (error) {
    response.status(500).json({ mensagem: "Erro ao deletar mulher", error });
  }
}

// Define as rotas
app.get("/mulheres", mostraMulheres); // Rota GET para /mulheres
app.post("/mulheres", criaMulher); // Rota POST para /mulheres
app.patch("/mulheres/:id", corrigeMulher); // Rota PATCH para /mulheres/:id
app.delete("/mulheres/:id", deletaMulher); // Rota DELETE para /mulheres/:id

// Inicia a conexão com o banco de dados e o servidor
conectaBancoDeDados().then(() => {
  app.listen(porta, () => {
    console.log("Servidor configurado e rodando na porta", porta);
  });
}).catch(error => {
  console.error("Erro ao iniciar o servidor:", error);
});
