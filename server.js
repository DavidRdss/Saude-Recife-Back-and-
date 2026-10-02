require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarBanco = require('./configuracao/banco');

// Rotas
const rotasAutenticacao = require('./rotas/rotasAutenticacao');
const rotasTriagem = require('./rotas/rotasTriagem');
const rotasClinica = require('./rotas/rotasClinica');
const rotasAgendamento = require('./rotas/rotasAgendamento');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Conexao com o banco de dados
conectarBanco();

// Registro das rotas (prefixo /api)
app.use('/api/auth', rotasAutenticacao);                // login, cadastro, esqueci a senha
app.use('/api/triagem', rotasTriagem);                  // pre-triagem inteligente / sintomas
app.use('/api/clinicas', rotasClinica);                 // clinicas parceiras, medicos
app.use('/api/agendamentos', rotasAgendamento);         // agendamento de consultas

// Rota de saude da API
app.get('/api/saude', (req, res) => {
  res.json({ situacao: 'ok', mensagem: 'API Saude Recife rodando' });
});

// Middleware de erro generico (TODO: padronizar respostas de erro)
app.use((erro, req, res, next) => {
  console.error(erro.stack);
  res.status(erro.status || 500).json({ mensagem: erro.message || 'Erro interno do servidor' });
});

const PORTA = process.env.PORTA || 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});