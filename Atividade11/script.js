
let objRetangulo;

class Retangulo{
    constructor(base, altura){
        console.log(`Altura: ${altura}\nBase: ${base}`);

        this.base = parseFloat(base);
        this.altura = parseFloat(altura);
    }

    calcArea(){
        return this.altura * this.base
    }
}

//! COMEÇO - FORA DO PROJETO
class Retangulo2{
    constructor(){
        this._base;
        this._altura;
    }

    get base(){
        return this._base;
    }

    get altura(){
        return this._altura;
    }

    set base(value){
        this._base = value;
    }

    set altura(value){
        this._altura = value
    }

    calcArea(){
        return this.altura * this.base
    }
}
//! FIM - FORA DO PROJETO

function criarObjeto(){

    //! COMEÇO - FORA DO PROJETO
    
    retangulo = new Retangulo2();
    retangulo.altura = 10;
    retangulo.base = 20;
    console.log(`A área é ${retangulo.calcArea()}`);
    
    //! FIM - FORA DO PROJETO

    let base   = document.getElementById("base").value;
    let altura  = document.getElementById("altura").value;

    let objAluno2 = new Retangulo(base, altura);
    
    alert(`A area: ${objAluno2.calcArea()}`);
    
    //! COMEÇO - FORA DO PROJETO

    let Quadrado = class {
        constructor(lado){
            this.lado = lado;
        }

        calculaArea(){
            return this.lado * this.lado;
        }
    } 

    let objQuadrado = new Quadrado(100);
    console.log(`Área do quadrado: ${objQuadrado.calculaArea()}`);

    //! FIM - FORA DO PROJETO

}

// Classes feitas por funções

function Conta(){
    
    let nome;
    let banco;
    let numConta;
    let saldo;

    this.setNome = function(value){
        this.nome = value;
    }

    this.getNome = function(){
        return this.nome
    }

    this.setBanco = function(value){
        this.banco = value;
    }

    this.getBanco = function(){
        return this.banco
    }

    this.setNumConta = function(value){
        this.numConta = value;
    }

    this.getNumConta = function(){
        return this.numConta
    }

    this.setSaldo = function(value){
        this.saldo = value;
    }

    this.getSaldo = function(){
        return this.saldo
    }

}

function ContaCorrente(){
    
    let saldoEspecial;

    this.setSaldoEspecial = function(value){
        this.saldoEspecial = value;
    }

    this.getSaldoEspecial = function(){
        return this.saldoEspecial
    }

}

function ContaPoupanca(){
    
    let juros;
    let dataVencimento;

    this.setJuros = function(value){
        this.juros = value;
    }

    this.getJuros = function(){
        return this.juros
    }

    this.setDataVencimento = function(value){
        this.dataVencimento = value;
    }

    this.getDataVencimento = function(){
        return this.dataVencimento
    }

}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

function criarContaCorrente(){
    let contaCorrente = new ContaCorrente();

    let nome = document.getElementById("nome1").value;
    let banco = document.getElementById("banco1").value;
    let numConta = document.getElementById("numConta1").value;
    let saldo = document.getElementById("saldo1").value;
    let saldoEspecial = document.getElementById("saldoEspecial").value;
    
    contaCorrente.setNome(nome);
    contaCorrente.setBanco(banco);
    contaCorrente.setNumConta(numConta);
    contaCorrente.setSaldo(saldo);
    contaCorrente.setSaldoEspecial(saldoEspecial);

    alert(`CONTA CORRENTE CRIADO COM SUCESSO\nNOME: ${contaCorrente.getNome()}\nBANCO: ${contaCorrente.getBanco()}\nNÚMERO DA CONTA: ${contaCorrente.getNumConta()}\nSALDO: ${contaCorrente.getSaldo()}\nSALDO ESPECIAL: ${contaCorrente.getSaldoEspecial()}`)
}

function criarContaPoupanca(){
    let contaPoupanca = new ContaPoupanca();

    let nome = document.getElementById("nome2").value;
    let banco = document.getElementById("banco2").value;
    let numConta = document.getElementById("numConta2").value;
    let saldo = document.getElementById("saldo2").value;
    let juros = document.getElementById("juros").value;
    let dataVencimento = document.getElementById("dataVencimento").value;

    contaPoupanca.setNome(nome);
    contaPoupanca.setBanco(banco);
    contaPoupanca.setNumConta(numConta);
    contaPoupanca.setSaldo(saldo);
    contaPoupanca.setJuros(juros);
    contaPoupanca.setDataVencimento(dataVencimento);

    alert(`CONTA POUPANÇA CRIADO COM SUCESSO\nNOME: ${contaPoupanca.getNome()}\nBANCO: ${contaPoupanca.getBanco()}\nNÚMERO DA CONTA: ${contaPoupanca.getNumConta()}\nSALDO: ${contaPoupanca.getSaldo()}\nJUROS: ${contaPoupanca.getJuros()}\nDATA VENCIMENTO: ${contaPoupanca.getDataVencimento()}`)
}