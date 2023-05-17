function abrirJanela(){
    let texto = document.getElementsByTagName("h2")[0];
    texto.innerText = "Janela aberta";

    let imagem = document.getElementById("janela");
    imagem.setAttribute('src', './janelaaberta.png');
}

function fecharJanela(){
    let texto = document.getElementsByTagName("h2")[0];
    texto.innerText = "Janela fechada";

    let imagem = document.getElementById("janela");
    imagem.setAttribute('src', './janelafechada.png');
}

function quebrarJanela(){
    let texto = document.getElementsByTagName("h2")[0];
    texto.innerText = "Janela quebrada";

    let imagem = document.getElementById("janela");
    imagem.setAttribute('src', './janelaquebra.png');
}