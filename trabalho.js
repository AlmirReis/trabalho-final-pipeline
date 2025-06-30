// trabalho.js

/**
 * Gera tag de identificação com o nome em letras maiúsculas.
 * @param {string} nome
 * @returns {string}
 */
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

/**
 * Verifica se o pet pode ser adotado.
 * @param {number} idade
 * @param {string} porte
 * @returns {boolean}
 */
function verificarSePodeSerAdotado(idade, porte) {
  // lógica fictícia
  return idade >= 1 && porte === 'M';
}

/**
 * Calcula o consumo diário de ração em gramas.
 * @param {string} nome
 * @param {number} idade
 * @param {number} peso
 * @returns {number}
 */
function calcularConsumoDeRacao(nome, idade, peso) {
  // lógica fictícia
  return peso * 300; // por exemplo
}

/**
 * Decide o tipo de atividade conforme o porte.
 * @param {string} porte
 * @returns {string}
 */
function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') return 'brincar dentro de casa';
  return 'atividade ao ar livre';
}

/**
 * Busca dado de forma assíncrona.
 * @returns {Promise<string>}
 */
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
