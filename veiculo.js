"use strict";
class Veiculo {
    constructor(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }
}
class Carro extends Veiculo {
    constructor(placa, ano, modelo) {
        super(placa, ano);
        this.modelo = modelo;
    }
}
class CarroEletrico extends Carro {
    constructor(placa, ano, modelo, autonomiaBateria) {
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}
let veiculo = new Veiculo("pid-9060", 2010);
let carro = new Carro("mid-3067", 2012, "Gol");
let carroeletrico = new CarroEletrico("pic-6858", 2006, "Classic", 10);
console.log(carroeletrico instanceof CarroEletrico);
console.log(carroeletrico instanceof Carro);
console.log(carroeletrico instanceof Veiculo);
console.log(carro instanceof Veiculo);
console.log(veiculo instanceof Carro);
