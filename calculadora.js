"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
}
class CalculadoraCientifica extends Calculadora {
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    exponenciar() {
        return this.operando1 ** this.operando2;
    }
}
let calc1 = new Calculadora(4, 2);
console.log(calc1.somar());
let calc2 = new Calculadora(-4, 2);
console.log(calc2.somar());
let calc3 = new Calculadora(4, -2);
console.log(calc3.somar());
let calc4 = new Calculadora(-4, -2);
console.log(calc4.somar());
let calc_cient1 = new CalculadoraCientifica(4, 2);
console.log(calc_cient1.exponenciar());
let calc_cient2 = new CalculadoraCientifica(-4, 2);
console.log(calc_cient2.exponenciar());
let calc_cient3 = new CalculadoraCientifica(4, -2);
console.log(calc_cient3.exponenciar());
let calc_cient4 = new CalculadoraCientifica(-4, -2);
console.log(calc_cient4.exponenciar());
let calc_cient5 = new CalculadoraCientifica(4, 3);
console.log(calc_cient5.exponenciar());
let calc_cient6 = new CalculadoraCientifica(-4, 3);
console.log(calc_cient6.exponenciar());
