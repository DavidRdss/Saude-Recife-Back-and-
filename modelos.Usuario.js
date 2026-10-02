const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }, // armazenar sempre com hash (bcrypt)
    idade: { type: Number },
    telefone: { type: String },
    provedor: { type: String, enum: ['local', 'google', 'facebook'], default: 'local' },
    // TODO: outros campos de perfil (endereco, plano de saude, etc)
  },
  { timestamps: true }
);

module.exports = mongoose.model('Usuario', usuarioSchema);