const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema(
  {
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    clinica: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinica', required: true },
    medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
    triagem: { type: mongoose.Schema.Types.ObjectId, ref: 'Triagem' },
    data: { type: Date, required: true },
    horario: { type: String, required: true }, // ex: "10:30"
    situacao: {
      type: String,
      enum: ['pendente', 'confirmado', 'cancelado', 'concluido'],
      default: 'pendente',
    },
    // TODO: notificacoes (lembrete, confirmacao) - integrar com servico de push/SMS
  },
  { timestamps: true }
);

module.exports = mongoose.model('Agendamento', agendamentoSchema);