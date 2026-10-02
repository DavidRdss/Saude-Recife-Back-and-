const express = require('express');
const roteador = express.Router();
const controladorTriagem = require('../controladores/controladorTriagem');
const middlewareAutenticacao = require('../middlewares/middlewareAutenticacao');

roteador.get('/sintomas', middlewareAutenticacao, controladorTriagem.listarSintomas);
roteador.post('/', middlewareAutenticacao, controladorTriagem.criarTriagem);
roteador.get('/:id/resultado', middlewareAutenticacao, controladorTriagem.obterResultadoTriagem);
roteador.get('/:id/recomendacoes', middlewareAutenticacao, controladorTriagem.obterRecomendacoes);

module.exports = roteador;