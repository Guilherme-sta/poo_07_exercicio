"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get Nomecompleto() {
        return this.nome + " " + this._sobrenome;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    set salario(ehSalario) {
        if (ehSalario >= 0) {
            this._salario = ehSalario;
        }
        else {
            console.log("O salário de um funcionário não pode ser negativo");
        }
    }
    calcularSalarioPrimeiraParcela() {
        return this._salario * 0.6;
    }
    calcularSalarioSegundaParcela() {
        return this._salario * 0.4;
    }
}
class Professor extends Funcionario {
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    get titulacao() {
        return this._titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
class FolhaDePagamento {
    constructor(pessoas) {
        this._pessoa = pessoas;
    }
    calcularPagamentos() {
        let total = 0;
        for (let pessoa of this._pessoa) {
            if (pessoa instanceof Funcionario) {
                total += pessoa.calcularSalarioPrimeiraParcela();
                total += pessoa.calcularSalarioSegundaParcela();
            }
        }
        return total;
    }
}
let pessoa1 = new Pessoa("Guilherme", "Alves");
console.log(pessoa1.Nomecompleto);
let funcionario1 = new Funcionario("Nicolas", "Damasceno", "123", 3000);
console.log(funcionario1.calcularSalarioPrimeiraParcela());
console.log(funcionario1.calcularSalarioSegundaParcela());
let professor1 = new Professor("Rogério", "Silva", "456", 5000, "doutor");
console.log(professor1.calcularSalarioPrimeiraParcela());
console.log(professor1.calcularSalarioSegundaParcela());
let folha1 = new FolhaDePagamento([pessoa1, funcionario1, professor1]);
console.log(folha1.calcularPagamentos());
