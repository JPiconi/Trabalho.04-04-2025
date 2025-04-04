/*------------------------------------------------------------------------------------------*/
//CLASSE FUNCIONARIO
class Funcionario {
  //ATRIBUTOS DE NOME, SALARIO E DATA DE ADMISSÃO
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  //MÉTODO DENTRO DA CLASSE, UTLIZADA PARA CALCULAR O BÔNUS 
  //DO NOSSO FUNCIONARIO A PARTIR DO SEU SALARIO
  calcularBonusfuncionario() {
    return this.salario * 0.1;
  }
//MÉTODO PARA EXIBIR OS DETALHES DO QUE FIZEMOS, EXIBINDO O NOME O BÔNUS 
//E QUANTO FICA JUNTO DO SEU SALARIO E A DATA QUE O FUNCIONARIO ENTROU NA EMPRESA
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
//CLASSE GERENTE, UTILIZANDO O EXTENDS PARA PEGARMOS OS ATRIBUTOS DA FUNÇÃO ANTERIOR
//COM O DETALHE DE ADICIONARMOS O DEPARTAMENTO PARA O NOSSO GERENTE.
class Gerente extends Funcionario {
  constructor(nome, salario, departamento, dataAdmissao) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
  }
  //MÉTODO PARA CALCULAR O BÔNUS DO GERENTE
  calcularBonusgerente() {
    return this.salario * 0.2;
  }

  //MÉTODO PARA EXIBIR TUDO DO GERENTE, DESDE SEU NOME, O SEU BÔNUS,
  //QUANDO QUE FICA JUNTO DE SEU SALARIO, O DEPARTAMENTO QUE ELE TRABALHA E QUANDO ELE ENTROU NA EMPRESA
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
//CONSTANTES PARA DEFINIR AS CLASSES E CHAMAR OS MÉTODOS E A ATRIBUIÇÃO DOS VALORES AOS ATRIBUTOS.
const funcionario = new Funcionario("Júlia", 2000, "02/10/2024");
funcionario.exibirDetalhesdofuncionario();
const gerente = new Gerente("Jorge", 4000, "T.I", "10/02/1999");
gerente.exibirDetalhesdogerente();
/*------------------------------------------------------------------------------------------*/
