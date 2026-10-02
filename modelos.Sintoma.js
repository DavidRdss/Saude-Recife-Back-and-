const mongoose = require('mongoose');

const sintomaSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // ex: "Febre", "Tosse", "Dor de cabeca"
  icone: { type: String }, // referencia ao icone exibido no app
  // TODO: peso/gravidade do sintoma, usado no calculo de classificacao
});

module.exports = mongoose.model('Sintoma', sintomaSchema);