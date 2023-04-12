var nomeAluno = prompt(`Informe o nome do Aluno:`)

var n1 = prompt(`Digite a nota 1: `);
var n2 = prompt(`Digite a nota 2: `);
var n3 = prompt(`Digite a nota 3: `);

function calcMediaNota(){
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);

    var media = (n1 + n2 + n3) / 3;

    return media;
}

alert(`O aluno ${nomeAluno} tem média de notas: ${calcMediaNota()}`);