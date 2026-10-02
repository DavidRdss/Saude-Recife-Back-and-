const Usuario = require('../modelos/Usuario');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Tela: "Criar Conta / Cadastra-se"
exports.cadastrar = async (req, res) => {
  try {
    // TODO: validar dados (nome, cpf, email, senha)
    // TODO: hash da senha com bcrypt antes de salvar
    // TODO: criar usuario no banco
    res.status(201).json({ mensagem: 'Usuario cadastrado (stub)' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Tela: "Bem-vindo! Faca seu login" (CPF ou E-mail + Senha)
exports.entrar = async (req, res) => {
  try {
    // TODO: buscar usuario por cpf ou email
    // TODO: comparar senha com bcrypt.compare
    // TODO: gerar token JWT (jwt.sign)
    res.status(200).json({ mensagem: 'Login realizado (stub)', token: 'token_jwt_aqui' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Botoes: "Entrar com Google" / "Entrar com Facebook"
exports.loginSocial = async (req, res) => {
  try {
    // TODO: validar token do provedor (Google/Facebook OAuth)
    // TODO: criar ou localizar usuario com provedor correspondente
    res.status(200).json({ mensagem: 'Login social (stub)' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Link: "esqueceu a senha?"
exports.esqueciSenha = async (req, res) => {
  try {
    // TODO: gerar token de redefinicao e enviar por e-mail
    res.status(200).json({ mensagem: 'E-mail de recuperacao enviado (stub)' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};