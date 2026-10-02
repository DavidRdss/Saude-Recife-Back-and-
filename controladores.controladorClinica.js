const Clinica = require('../modelos/Clinica');
const Medico = require('../modelos/Medico');

// Botao: "Buscar Clinicas Proximas" / Tela: "Selecione uma clinica parceira"
exports.buscarClinicasProximas = async (req, res) => {
  try {
    // const { latitude, longitude, especialidade } = req.query;
    // TODO: buscar clinicas proximas (geolocalizacao) e filtrar por especialidade
    res.status(200).json({ clinicas: [] });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Ao clicar em uma clinica -> lista de medicos disponiveis
exports.listarMedicosDaClinica = async (req, res) => {
  try {
    // const { idClinica } = req.params;
    // TODO: buscar medicos vinculados a clinica
    res.status(200).json({ medicos: [] });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Tela: perfil do profissional (Dra. Luana Martins, CRM, avaliacoes)
exports.obterPerfilMedico = async (req, res) => {
  try {
    // const { idMedico } = req.params;
    // TODO: buscar detalhes do medico + horarios disponiveis
    res.status(200).json({ medico: null });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};