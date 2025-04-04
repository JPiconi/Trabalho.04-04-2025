//console.log("JAVASCRIPT CONECTADO!");

// CLASSE - Molde para criar objetos
class Veiculo {
  // CONSTRUCTOR - É um método especial do Javascript.
  constructor(marca, modelo) {
    // THIS - É uma palavra-chave especial, que se refere ao próprio objeto criado
    this.marca = marca;
    this.modelo = modelo;
  }
}

// OBJETO - É uma instancia da classe
const primeiroVeiculo = new Veiculo("Ford", "Mustang Mach 1");
console.log(primeiroVeiculo.marca);
console.log(primeiroVeiculo.modelo);

/*------------------------------------------------------------------------------------------*/

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const celular = new Produto("Celular", 1500);
const notebook = new Produto("Notebook", 3000);
console.log(
  `Nome do produto: ${celular.nome} - Preço do produto: ${celular.preco} `
);
console.log(
  `Nome do produto: ${notebook.nome} - Preço do produto: ${notebook.preco} `
);

/*------------------------------------------------------------------------------------------*/

class contaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }
  // MÉTODOS -São funções dentro de uma classe, sevem para executar ações
  // Ou manipular atributos!
  depositar(valor) {
    // this.saldo = this.saldo + valor
    this.saldo += valor;
  }
  getSaldo() {
    return `Seu saldo é: ${this.saldo.toFixed(2)}`;
  }
}

const conta = new contaBancaria(10000);
console.log(conta.getSaldo());
conta.depositar(50000);
console.log(conta.getSaldo());

/*------------------------------------------------------------------------------------------*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  // MÉTODOS -São funções dentro de uma classe, sevem para executar ações
  // Ou manipular atributos!
  apresentação() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos`;
  }
}

const minhaApresentação = new Pessoa("Júlia", 17);
console.log(minhaApresentação.apresentação());

/*------------------------------------------------------------------------------------------*/

class Steam {
  //ATRIBUTO ENCAPSULADO - Traduzindo privado.
  //Apenas classe e os métodos dentro da classe tem acesso!
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }
  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O depósito é inválido");
    }
  }
  getSaldoSteam() {
    return `Seu saldo atual na steam é ${this.#saldo}`;
  }
}

const steam = new Steam(6000);
steam.depositarValorSteam(660);
console.log(steam.getSaldoSteam());

/*------------------------------------------------------------------------------------------*/

class Usuario {
  constructor(senha) {
    this.senha = senha;
  }
  //MÉTODO verificarForcaSenha ENCAPSULADO - Traduzindo privado.
  //Apenas classe e os métodos dentro da classe tem acesso!
  #verificarForcaSenha(senha) {
    return senha.length > 6 ? true : false;
  }
  criarConta(senha) {
    if (this.#verificarForcaSenha(this.senha)) {
      return console.log("Conta Criada com Sucesso!");
    }
    return console.log("Senha Inválida!!");
  }
}
const user = new Usuario("79889876");
user.criarConta();

/*------------------------------------------------------------------------------------------*/

//EXTENDS - Palavra-chave utilizada em Javascript para criar uma classe filha
//Que herda uma classe pai, neste caso carro (filha) herda veiculo (Pai)
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    //SUPER - Utilizado para chamar o constructor da classe pai
    //E reutilizar seus atributos
    super(marca, modelo);
    this.portas = portas;
  }
  info() {
    console.log(
      `A marca do carro é: ${this.marca}, seu modelo é: ${this.modelo} e ele possui ${this.portas} portas`
    );
  }
}

const meuCarro = new Carro("BMW", "i5 M60", 4);
meuCarro.info();

/*------------------------------------------------------------------------------------------*/

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
  mostrarDados() {
    console.log(
      `Funcionário: ${
        this.nome
      }, tem o salário igual á: R$${this.salario.toFixed(2)}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, tipo) {
    super(nome, salario);
    this.tipo = tipo;
  }
  mostrarSetor() {
    console.log(`${this.nome} é gerente do setor ${this.tipo}`);
  }
}

const gerente = new Gerente("Alcindo", 10000, "T.I");
gerente.mostrarDados();
gerente.mostrarSetor();

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------*/
