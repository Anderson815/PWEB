function exibirMensagem() { 
    let simSelected = document.getElementById('sim');

    if (simSelected.checked) {
        alert("Volte sempre a esta página!");
    } else {
        alert("Que bom que você voltou a visitar esta página!");
    }
    
}

function limparSelecao() {

    var inputText = document.getElementsByName('inputText');
    for(var i = 0; i < inputText.length; i++){
        inputText[i].innerText = "";
    }

    var radios = document.getElementsByName('radioForm');
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}