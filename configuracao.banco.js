const mongoose = require('mongoose');

const conectarBanco = async () => {
  try {
    // TODO: ajustar opcoes de conexao conforme necessidade (pool, timeout, etc)
    await mongoose.connect(process.env.URI_MONGO);
    console.log('MongoDB conectado com sucesso');
  } catch (erro) {
    console.error('Erro ao conectar ao MongoDB:', erro.message);
    process.exit(1);
  }
};

module.exports = conectarBanco;