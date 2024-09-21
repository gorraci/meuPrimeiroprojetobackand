const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config(); // Carrega variáveis de ambiente do arquivo .env

// Pega o URI do MongoDB da variável de ambiente
const uri = process.env.MONGO_URL;

// Criação de um novo cliente MongoDB com as opções definidas
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Conecta o cliente ao servidor MongoDB
    await client.connect();
    
    // Envia um ping ao servidor para verificar se a conexão foi bem-sucedida
    await client.db("MULHERESTI").command({ ping: 1 });
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  } finally {
    // Fecha a conexão com o cliente após o teste
    await client.close();
  }
}

// Executa a função e captura quaisquer erros
run().catch(console.dir);

