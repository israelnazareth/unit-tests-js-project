const { strict } = require('assert');
const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const keysOfProducts = Object.keys(productDetails());
    const valuesOfProducts = Object.values(productDetails())
    assert.deepStrictEqual(typeof productDetails(), 'object'); // Teste que o retorno da função é um array.
    assert.deepStrictEqual(productDetails().length, 2); // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(typeof keysOfProducts, 'object'); // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notDeepStrictEqual(keysOfProducts[0], keysOfProducts[1]); // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(valuesOfProducts.indexOf('123'), valuesOfProducts.length - 3) // Teste que os dois productIds terminam com 123.
  });
});
