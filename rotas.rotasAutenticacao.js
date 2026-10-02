const express = require('express');
const roteador = express.Router();
const controladorAutenticacao = require('../controladores/controladorAutenticacao');

roteador.post('/cadastro', controladorAutenticacao.cadastrar);
roteador.post('/login', controladorAutenticacao.entrar);
roteador.post('/login-social', controladorAutenticacao.loginSocial);
roteador.post('/esqueci-senha', controladorAutenticacao.esqueciSenha);

module.exports = roteador;