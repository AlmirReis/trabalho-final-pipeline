const {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
} = require('../trabalho');

describe('Testes da disciplina - fundamentos JS', () => {
  test('Deve imprimir o nome do Pet em letras maiúsculas', () => {
    expect(geradorDeTagsDeIdentificacao('Pantera')).toBe('PANTERA');
  });

  test('Deve permitir adoção para idade >= 1 e porte M', () => {
    expect(verificarSePodeSerAdotado(1, 'M')).toBe(true);
  });

  test('Deve retornar 4350 gramas para consumo diário com peso 14.5', () => {
    expect(calcularConsumoDeRacao('Pitoco', 1, 14.5)).toBe(4350);
  });

  test('Deve retornar a atividade adequada para porte pequeno', () => {
    expect(decidirTipoDeAtividadePorPorte('pequeno')).toBe(
      'brincar dentro de casa'
    );
  });

  test('Deve retornar valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    expect(resultado).toBe('Pipoca');
  });
});
