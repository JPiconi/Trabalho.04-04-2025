/*------------------------------------------------------------------------------------------*/

class Funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }

  exibirDetalhes() {
    const bonus = this.calcularBonus();
    console.log(
      `A(o) Funcionária(o) ${
        this.nome
      }, recebe com o bônus de ${bonus} reais, ${
        this.salario + bonus
      } reais e foi admitida(o) no dia ${this.dataAdmissao}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
  }
  calcularBonus() {
    return this.salario * 0.2;
  }

  exibirDetalhes2() {
    const bonus = this.calcularBonus();
    console.log(
      `O(a) Gerente ${this.nome}
      , recebe com o bônus de ${bonus} reais ${
        this.salario + bonus
      } reais, foi admitid0(a) no dia ${this.dataAdmissao} no departamento ${
        this.departamento
      }`
    );
  }
}

const funcionario = new Funcionario("Júlia", 2000, "02/10/2024");
funcionario.exibirDetalhes();
const gerente = new Gerente("Jorge", 4000, "10/02/1999", "T.I");
gerente.exibirDetalhes2();
/*------------------------------------------------------------------------------------------*/
