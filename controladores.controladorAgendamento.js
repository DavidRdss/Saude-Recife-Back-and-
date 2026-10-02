const Agendamento = require('../modelos/Agendamento');

// Tela: "Selecione o horario" -> retorna horarios disponiveis do medico
exports.buscarHorariosDisponiveis = async (req, res) => {
  try {
    // const { idMedico, data } = req.query;
    // TODO: buscar horarios livres/ocupados do medico na data selecionada
    res.status(200).json({ horarios: [] });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Botao: "Selecionar horario" / "Continuar" -> cria o agendamento
exports.criarAgendamento = async (req, res) => {
  try {
    const { paciente, clinica, medico, triagem, data, horario } = req.body;
    // TODO: validar disponibilidade do horario
    // TODO: salvar agendamento com situacao "pendente"
    // TODO: disparar notificacao de confirmacao (etapa "Notificacao" do fluxo)
    res.status(201).json({ mensagem: 'Agendamento criado (stub)' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Tela: "Proximas consultas" / "Historico de atendimento"
exports.listarAgendamentos = async (req, res) => {
  try {
    // const idUsuario = req.usuario.id;
    // TODO: retornar consultas futuras e passadas do usuario logado
    res.status(200).json({ agendamentos: [] });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Cancelamento de consulta
exports.cancelarAgendamento = async (req, res) => {
  try {
    // const { idAgendamento } = req.params;
    // TODO: atualizar situacao para "cancelado"
    res.status(200).json({ mensagem: 'Agendamento cancelado (stub)' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};