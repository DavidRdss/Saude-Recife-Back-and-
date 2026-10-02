const mongoose = require('mongoose');

const triagemSchema = new mongoose.Schema(
  {
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    sintomas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sintoma' }],
    temperatura: { type: Number }, // ex: 39.2
    observacao: { type: String },
    classificacao: {
      type: String,
      enum: ['baixa', 'moderada', 'prioritario', 'emergencia'],
      default: 'baixa',
    },
    recomendacoes: [{ type: String }], // ex: ["Clinica geral", "Pediatra"]
    // TODO: logica de classificacao automatica (regras ou modelo de triagem)
  },
  { timestamps: true }
);

module.exports = mongoose.model('Triagem', triagemSchema);