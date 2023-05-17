
let objRetangulo;

class Animal{
    constructor(nome){
        this.nome = nome;
    }

    som(){
        alert(`${this.nome} emite som`);
    }
}

class Galinha extends Animal{
    constructor(nome){
        super(nome);
    }
    som(){
        alert(`${this.nome} cacareja`);
    }
}

class GalinhaAngola extends Galinha{
    constructor(nome){
        super(nome);
    }
    som(){
        alert(`${this.nome} fala tô fraco`);
    }
}

class Poligono{
    constructor(comprimento){
        this.comprimento = comprimento
        this.nome = "Poligono"
    }
}

class Quadrado extends Poligono{
    constructor(comprimento, nome){
        super(comprimento)
        this.nome = nome;
    }

    areaQuadrado = function(){
        return this.comprimento ** 2; 
    }
}

class Aluno{
    constructor(){
        this._nome = '';
    }

    get nome(){
        return this._nome
    }

    set nome(value){
        this._nome = value;
    }
}

class AlunoSuperior extends Aluno{
    constructor(){
        super();
        this._curso = '';
    }

    get curso(){
        return this._curso
    }

    set curso(value){
        this._curso = value;
    }
}

function criarObjeto(){
    let animal = new Animal("cachorro");
    animal.som();

    let galinha = new Galinha("sla mano");
    galinha.som();

    let galinhaAngolana = new GalinhaAngola("FRACO");
    galinhaAngolana.som();

    let quadrado = new Quadrado(20, "VAI P MERDA");
    alert(`Area: ${quadrado.areaQuadrado()} | Nome desta coisa: ${quadrado.nome}`);


    let aluno = new Aluno();

    aluno.nome = "A";

    alert(aluno.nome)

    let alunoSuperior = new AlunoSuperior();

    alunoSuperior.nome = "B";
    alunoSuperior.curso = "ADS";

    alert(`${alunoSuperior.nome} faz o curso de ${alunoSuperior.curso}`);
}