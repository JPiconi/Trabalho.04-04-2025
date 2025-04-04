/*------------------------------------------------------------------------------------------*/

class Funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonusfuncionario() {
    return this.salario * 0.1;
  }

  exibirDetalhesdofuncionario() {
    console.log(
      `A(o) Funcionária(o) ${this.nome}, recebe com o bônus de ${
        this.calcularBonusfuncionario
      } reais, ${
        this.salario + this.calcularBonusfuncionario
      } reais e foi admitida(o) no dia ${this.dataAdmissao}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento, dataAdmissao) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
  }
  calcularBonusgerente() {
    return this.salario * 0.2;
  }

  exibirDetalhesdogerente() {
    console.log(
      `O(a) Gerente ${this.nome}, recebe com o bônus de ${
        this.calcularBonusgerente
      } reais ${
        this.salario + this.calcularBonusgerente
      } reais, foi admitido(a) no departamento de ${this.departamento} no dia ${
        this.dataAdmissao
      }`
    );
  }
}

const funcionario = new Funcionario("Júlia", 2000, "02/10/2024");
funcionario.exibirDetalhesdofuncionario();
const gerente = new Gerente("Jorge", 4000, "T.I", "10/02/1999");
gerente.exibirDetalhesdogerente();
/*------------------------------------------------------------------------------------------*/
