//let variavel = 10; ## o comando let cria variáveis
//const pi = 3.14; ## o comando const cria constantes, não é possivel alterar o valor após ser definido
//console.log(variavel); ## console.log imprime as informações na tela

//variavel = 20;
//console.log(variavel);
//let variavel = 10 * 20; ## É possivel atualizar o valor da variável, sem ser necessário colocar o comando let novamente
//console.log(variavel);

//variavel = 45; aparentemente, o let não é obrigatório
//console.log(variavel);

//let a; ## gerar uma variavel sem valor retorna o valor undefined no console.log
//console.log(a);

///////////////////////////////////////////////////////////////////////////////////////////

//Desafio
/*
teste
*/
const precoCombustivel = 5.79; // define o preço do combustível usado pelo carro
const gastoMedioporKM = 12; //  define a distancia (em KM) que o carro percorre utilizando 1 litro de combustivel
const distanciaKM = 1580; // define a distância a ser percorrida

const valorGastoTotal = ( ( distanciaKM / gastoMedioporKM ) * precoCombustivel ); // armazena o resultado
 console.log(valorGastoTotal.toFixed(2));