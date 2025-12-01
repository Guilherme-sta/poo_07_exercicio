class Empregado {
    salario: number = 500;
    calcularSalario(): number {
        return this.salario;
    }
}

class Diarista extends Empregado{
    calcularSalario(): number {
        return super.calcularSalario() / 30;
    }
}

class Horista extends Diarista{
    calcularSalario(): number {
        return super.calcularSalario() / 24;        
    }
}

let empregado = new Empregado();
let diarista = new Diarista();
let horista = new Horista();

console.log(empregado.calcularSalario());
console.log(diarista.calcularSalario());
console.log(horista.calcularSalario())