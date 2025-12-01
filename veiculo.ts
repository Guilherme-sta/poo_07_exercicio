class Veiculo {
    placa: String;
    ano: number;

    constructor(placa: String, ano:number){
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo{
    modelo: string;

    constructor(placa: String, ano: number, modelo: string){
        super(placa,ano);
        this.modelo = modelo;
    }
}

class CarroEletrico extends Carro{
    autonomiaBateria: number;

    constructor(placa: String, ano: number, modelo: string, autonomiaBateria: number){
        super(placa,ano,modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}

let veiculo = new Veiculo("pid-9060",2010);
let carro = new Carro("mid-3067",2012,"Gol");
let carroeletrico = new CarroEletrico("pic-6858",2006,"Classic",10);

console.log(carroeletrico instanceof CarroEletrico); 
console.log(carroeletrico instanceof Carro);   
console.log(carroeletrico instanceof Veiculo); 
console.log(carro instanceof Veiculo);
console.log(veiculo instanceof Carro);