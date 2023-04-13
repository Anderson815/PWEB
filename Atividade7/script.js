function jogar(){
    let valorGerado = Math.random();
    let escolhaPC = 0;
    let escolhaPCMsg = "";
    let escolhaUser = parseInt(document.getElementById("opcaoUsuario").value)
    let msg = ""

    if(valorGerado <= 0.33){
        escolhaPC = 0;
        escolhaPCMsg = "Pedra";
    }
    else if(valorGerado <= 0.66){
        escolhaPC = 1;
        escolhaPCMsg = "Papel";
    }
    else{
        escolhaPC = 2;
        escolhaPCMsg = "Tesoura";
    }

    console.log(`Escolha pc: ${escolhaPC}\tPor extenso: ${escolhaPCMsg}`);
    console.log(`Escolha user: ${escolhaUser}`);

    if(escolhaUser - escolhaPC === 0)
        alert("empate");
    else if(escolhaUser - escolhaPC === -1 || escolhaUser - escolhaPC === 2)
        alert(`O coputador escolheu ${escolhaPCMsg}. Portanto você PERDEU!`)
    else{
        alert(`O coputador escolheu ${escolhaPCMsg}. Portanto você VENCEU!`)
    }
}