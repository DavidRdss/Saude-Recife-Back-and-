const express = require('express');
const roteador = express.Router();
const controladorAgendamento = require('../controladores/controladorAgendamento');
const middlewareAutenticacao = require('../middlewares/middlewareAutenticacao');

roteador.get('/horarios-disponiveis', middlewareAutenticacao, controladorAgendamento.buscarHorariosDisponiveis);
roteador.post('/', middlewareAutenticacao, controladorAgendamento.criarAgendamento);
roteador.get('/', middlewareAutenticacao, controladorAgendamento.listarAgendamentos);
roteador.patch('/:idAgendamento/cancelar', middlewareAutenticacao, controladorAgendamento.cancelarAgendamento);

module.exports = roteador;