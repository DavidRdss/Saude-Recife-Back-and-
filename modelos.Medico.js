const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // ex: "Dra. Luana Martins"
  crm: { type: String, required: true },
  especialidade: { type: String },
  clinica: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinica' },
  foto: { type: String },
  avaliacaoMedia: { type: Number, default: 0 },
  totalAvaliacoes: { type: Number, default: 0 },
  // TODO: agenda/horarios disponiveis (pode virar colecao propria)
});

module.exports = mongoose.model('Medico', medicoSchema);