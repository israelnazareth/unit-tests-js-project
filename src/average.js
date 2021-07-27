/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

/**
 * Consultei o repositório da Juliana Braga para resolver essa parte.
 * Link: https://github.com/tryber/sd-014-b-project-js-unit-tests/pull/16/commits/22733e4c05f9ba1a2a46d71de7413df3dcec21fb
 */

const average = (arrayOfNumbers) => {
  const totalOfNumbers = arrayOfNumbers.length;
  let sumOfNumbers = 0;
  let undefinedAnswer;
  if (totalOfNumbers === 0) {
    return undefinedAnswer;
  }
  for (let value of arrayOfNumbers) {
    if (typeof value !== 'number') {
      return undefinedAnswer;
    }
    sumOfNumbers += value;
  }
  let media = sumOfNumbers / totalOfNumbers;
  return Math.round(media);
};

module.exports = average;
