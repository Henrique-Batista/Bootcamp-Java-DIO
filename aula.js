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
const precoCombustivel = 5.79; // define o preço do combustível usado pelo carro
const gastoMedioporKM = 12; //  define a distancia (em KM) que o carro percorre utilizando 1 litro de combustivel
const distanciaKM = 1580; // define a distância a ser percorrida

const valorGastoTotal = ( ( distanciaKM / gastoMedioporKM ) * precoCombustivel ); // armazena o resultado 
console.log(valorGastoTotal.toFixed(2)); // .toFixed() arredonda o float para 2 casas decimais
*/
/*
const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0; // O operador === retorna um bolean e o operador % retorna o resto de uma divisão, o operador == compara independente o tipo de dado

if (numero === 0) {

    console.log('Este número é invalido');

}else if (numeroDivisivelPor5) { // O else if é uma emenda do "se não" com o "se", formando uma frase logica como "se tal coisa for tal coisa,execute algo, se não, se tal coisa for aquilo lá, execute tal coisa"

    console.log('Sim');

} else {

    console.log('Não');

}
*/

//Desafio 

/////////////////////////////////////////////////////////////////////////


const precoEtanol = 7.79;
const precoGasolina = 6.66;
const kmRodadoPorLitro = 10;
const distanciaKM = 100;

const litrosConsumidos = ( distanciaKM / kmRodadoPorLitro );

const tipoCombustivel = 'etanol'; // strings podem ser definidas com '' "" e ``

if ( tipoCombustivel === 'etanol' ) {

    valorGasto = ( litrosConsumidos * precoEtanol ); // por algum motivo, definindo uma variavel dentro de um if e consultando seu valor fora dele dá erro como se p valor não tivesse sido definido

} else if ( tipoCombustivel === 'gasolina' ) {

    valorGasto = ( litrosConsumidos * precoGasolina );

} else {

    console.log('Valor inválido');

}

console.log(valorGasto.toFixed(2));