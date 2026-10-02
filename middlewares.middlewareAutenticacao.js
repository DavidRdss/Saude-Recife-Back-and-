const jwt = require('jsonwebtoken');

module.exports = function middlewareAutenticacao(req, res, next) {
  const cabecalhoAutorizacao = req.headers.authorization;

  if (!cabecalhoAutorizacao || !cabecalhoAutorizacao.startsWith('Bearer ')) {
    return res.status(401).json({ mensagem: 'Token nao fornecido' });
  }

  const token = cabecalhoAutorizacao.split(' ')[1];

  try {
    const decodificado = jwt.verify(token, process.env.CHAVE_JWT);
    req.usuario = decodificado; // { id, email, ... }
    next();
  } catch (erro) {
    return res.status(401).json({ mensagem: 'Token invalido ou expirado' });
  }
};