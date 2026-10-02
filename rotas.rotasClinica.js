const express = require('express');
const roteador = express.Router();
const controladorClinica = require('../controladores/controladorClinica');
const middlewareAutenticacao = require('../middlewares/middlewareAutenticacao');

roteador.get('/proximas', middlewareAutenticacao, controladorClinica.buscarClinicasProximas);
roteador.get('/:idClinica/medicos', middlewareAutenticacao, controladorClinica.listarMedicosDaClinica);
roteador.get('/medicos/:idMedico', middlewareAutenticacao, controladorClinica.obterPerfilMedico);

module.exports = roteador;