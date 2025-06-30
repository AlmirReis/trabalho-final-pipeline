// trabalho.js

function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  // lógica fictícia
  return idade >= 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
  // lógica fictícia
  return peso * 300; // por exemplo
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') return 'brincar dentro de casa';
  return 'atividade ao ar livre';
}

async function buscarDadoAsync() {
  return 'Pipoca';
}

module.exports = {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
};
