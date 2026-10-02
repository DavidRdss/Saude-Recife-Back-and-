const Triagem = require('../modelos/Triagem');
const Sintoma = require('../modelos/Sintoma');

// Tela: "Quais sintomas vc esta sentindo?"
exports.listarSintomas = async (req, res) => {
  try {
    // TODO: buscar lista de sintomas cadastrados (Dor de cabeca, Tosse, Febre, etc)
    res.status(200).json({ sintomas: [] });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Botao: "Continuar" apos selecionar sintomas -> cria a triagem
exports.criarTriagem = async (req, res) => {
  try {
    const { paciente, sintomas, temperatura, observacao } = req.body;
    // TODO: aplicar regras/algoritmo de classificacao
    //   -> baixa | moderada | prioritario | emergencia
    // TODO: definir recomendacoes de especialidade (Clinica geral, Pediatra, Medico...)
    res.status(201).json({ mensagem: 'Triagem criada (stub)' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Tela: "Classificacao e Resultado"
exports.obterResultadoTriagem = async (req, res) => {
  try {
    // TODO: buscar triagem pelo id e retornar classificacao + resumo do paciente
    res.status(200).json({ mensagem: 'Resultado da triagem (stub)' });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};

// Tela: "Aqui estao as recomendacoes"
exports.obterRecomendacoes = async (req, res) => {
  try {
    // TODO: retornar lista de especialidades recomendadas com base na triagem
    res.status(200).json({ recomendacoes: [] });
  } catch (erro) {
    res.status(500).json({ mensagem: erro.message });
  }
};