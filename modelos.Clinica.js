const mongoose = require('mongoose');

const clinicaSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // ex: "Clinica Santa Helena"
  endereco: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  especialidades: [{ type: String }], // ex: ["Clinica geral", "Pediatria"]
  imagem: { type: String },
  // TODO: horario de funcionamento, avaliacoes, distancia calculada dinamicamente
});

module.exports = mongoose.model('Clinica', clinicaSchema);