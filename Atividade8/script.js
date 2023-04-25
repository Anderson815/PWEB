const LIMITE_PESQUISA = 45;

let totIdade    = 0;
let qtdaPessoa  = 0;
let mediaIdade  = 0;
let idadeMax    = 0;
let idadeMin    = 0;
let qtdaPessimo = 0;
let qtdaOtimo   = 0;
let qtdaBom     = 0;
let porcenOtimo = 0;
let porcenBom   = 0;
let qtdaHomem   = 0;
let qtdaMulher  = 0;

function enviar(){
    
    let objTitulo  = document.getElementById("titulo");
    let objIdade   = document.getElementById("idade");
    let objSexo    = document.getElementById("sexo");
    let objOpiniao = document.getElementById("opiniao");
    let objBotao = document.getElementById("botao");

    if(qtdaPessoa < LIMITE_PESQUISA){
        qtdaPessoa++;
        totIdade += Number(objIdade.value);
        mediaIdade = totIdade / qtdaPessoa;

        if(Number(objIdade.value) > idadeMax)
            idadeMax = Number(objIdade.value);

        if(Number(objIdade.value) < idadeMin || idadeMin === 0)
            idadeMin = Number(objIdade.value);

        if(Number(objOpiniao.value) === 1)
            qtdaPessimo++;

        if(Number(objOpiniao.value) === 4)
            qtdaOtimo++;
        porcenOtimo = (qtdaOtimo / qtdaPessoa) * 100;

        if(Number(objOpiniao.value) === 3)
            qtdaBom++;   
        porcenBom = (qtdaBom / qtdaPessoa) * 100;
        
        if(Number(objSexo.value) === 0)
            qtdaHomem += 1;
        else
            qtdaMulher++;

        objTitulo.innerHTML = `Pesquisa de campo: ${qtdaPessoa + 1}`;

        if(qtdaPessoa === LIMITE_PESQUISA){
            objBotao.innerHTML = "Receber Relatório";
            objTitulo.style.cssText = `
                display: none;
            `

            objIdade.style.cssText = `
                display: none;
            `

            objSexo.style.cssText = `
                display: none;
            `

            objOpiniao.style.cssText = `
                display: none;
            `
        }

    }else{

        alert(`Média de idade: ${mediaIdade}.\nIdade da pessoa mais velha: ${idadeMax}.\nIdade da pessoa mais nova: ${idadeMin}.\nQuantidade de pessoas que responderam péssimo: ${qtdaPessimo}.\nPorcentagem de pessoas que responderam ótimo: ${porcenOtimo}.\nPorcentagem de pessoas que responderam bom: ${porcenBom}.\nNúmero de mulheres: ${qtdaMulher}.\nNúmero de homens: ${qtdaHomem}.`);

    }
}