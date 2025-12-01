class Pessoa{
    private _nome: string;
    private _sobrenome: string;

    constructor(nome: string,sobrenome: string){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(): string{
        return this._nome;
    }

    get sobrenome(): string{
        return this._sobrenome;
    }

    get Nomecompleto(): string{
        return this.nome + " " + this._sobrenome
    }
}

class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number

    constructor(nome: string,sobrenome: string,matricula: string,salario: number){
        super(nome,sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }

    get matricula(): string{
        return this._matricula;
    }

    get salario(): number{
        return this._salario;
    }

    set salario(ehSalario: number){
        if (ehSalario >= 0){
            this._salario = ehSalario;
        }
        else{
            console.log("O salário de um funcionário não pode ser negativo")
        }
    }

    calcularSalarioPrimeiraParcela(): number{
        return this._salario * 0.6
    }

    calcularSalarioSegundaParcela(): number{
        return this._salario * 0.4
    }
}

class Professor extends Funcionario{
    private _titulacao: string;

    constructor(nome: string,sobrenome: string,matricula: string,salario: number,titulacao: string){
        super(nome,sobrenome,matricula,salario);
        this._titulacao = titulacao;
    }

    get titulacao(): string{
        return this._titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario;
    }

    calcularSalarioSegundaParcela(): number {
        return 0;
    }
}

class FolhaDePagamento{
    private _pessoa: Pessoa[];

    constructor(pessoas: Pessoa[]){
        this._pessoa = pessoas;
    }

    calcularPagamentos(){
        let total: number = 0;

        for (let pessoa of this._pessoa){
            if (pessoa instanceof Funcionario){
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
console.log(professor1.calcularSalarioSegundaParcela())

let folha1 = new FolhaDePagamento([pessoa1,funcionario1,professor1]);
console.log(folha1.calcularPagamentos());