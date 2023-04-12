var n1 = prompt(`Informe o primeiro número`);
var n2 = prompt(`Informe o segundo número`);

var adicao;
var subtracao;
var multiplicacao;
var divisao;
var restoDivisao;

function executaOperacoes(){

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    adicao = parseFloat(n1 + n2);
    subtracao = parseFloat(n1 - n2);
    multiplicacao = parseFloat(n1 * n2);
    divisao = parseFloat(n1 / n2);
    restoDivisao = parseInt(n1 % n2);
    
    return alert(`Adição: ${adicao}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}\nResto Divisão: ${restoDivisao}`)
}

executaOperacoes();

