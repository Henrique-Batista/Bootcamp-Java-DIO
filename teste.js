// Faça um programa que mostre carros por quilometros rodados por litro, cor e velocidade maxima
//Entrada:
//honda civic ; branco ; 5 km/L
//tiggo ; cinza ; 10 km/L

class Carro {
    modelo;
    cor;
    kmPorLitro;

    constructor(modelo, cor, kmPorLitro) {
        this.modelo = modelo;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    imprima (){
        return `Este é um carro ${this.modelo} ${this.cor} que faz ${this.kmPorLitro} kilometros por litro de combustível`;
    }

}


(
function main(){

let carros = [];

const hondaCivic = new Carro('Honda Civic', 'branco', 5);
const tiggo = new Carro('Tiggo', 'cinza', 10);

carros.push(hondaCivic,tiggo)
carros.forEach(carros => console.log(carros.imprima()));

}
)();
