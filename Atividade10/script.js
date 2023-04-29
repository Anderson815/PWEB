
class Aluno{
    constructor(ra, nome){
        this.ra = ra;
        this.nome = nome;
    }
}

function criarObjeto(){

    let objRa  = document.getElementById("ra");
    let objNome   = document.getElementById("nome");
    
    let objAluno1 = { ra: objRa.value, nome: objNome.value };
    
    let objAluno2 = new Aluno(objRa.value, objNome.value);
    
    let objAluno3 = {};
    let ra_propriedade = 'ra';
    objAluno3[ra_propriedade] = objRa.value;
    let nome_propriedade = 'nome';
    objAluno3[nome_propriedade] = objNome.value;

    alert(`Forma 1\nRA: ${objAluno1.ra}\nNome: ${objAluno1.nome}`);
    alert(`Forma 2\nRA: ${objAluno2.ra}\nNome: ${objAluno2.nome}`);
    alert(`Forma 3\nRA: ${objAluno3.ra}\nNome: ${objAluno3.nome}`);
    
}