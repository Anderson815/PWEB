function abrirJanela() {
    var cursoSelecionado = document.getElementById("cursos").value;
    var confirmacao = confirm("Deseja abrir a página do curso: " + cursoSelecionado + "?");

    if (confirmacao) {
        var url = ""; 
        var janela = window.open(url, "_blank", "width=600,height=300");
        janela.document.write("<h1>Informações sobre o curso: " + cursoSelecionado + "</h1>");

        switch(cursoSelecionado){
            case "Análise e Desenvolvimento de Sistemas":
                janela.document.write("<p>O curso de ADS consiste basicamente em uma base de programação, mostrando um pouco de beck-end e front.</p>");
                break;

            case "Gestão Empresarial":
                janela.document.write("<p>O curso de Gestão Empresarial é uma formação na área de administração de empresas, com foco em desenvolver habilidades e conhecimentos necessários para gerenciar e liderar organizações de diferentes portes e segmentos.</p>");  
                break;

            case "Gestão da Qualidade":
                janela.document.write("<p>O curso de Gestão da Qualidade é uma formação voltada para profissionais interessados em adquirir conhecimentos e habilidades relacionados à implementação e melhoria de sistemas de gestão da qualidade nas organizações.</p>");
                break;

            case "Mecatrônica Industrial":
                janela.document.write("<p>O curso de Mecatrônica Industrial combina conhecimentos de áreas como mecânica, eletrônica e controle para formar profissionais capazes de projetar, desenvolver e operar sistemas automatizados utilizados na indústria.</p>");
                break;

            case "Sistemas Biomédicos":
                janela.document.write("<p>O objetivo principal do mesmo é capacitar profissionais para desenvolver, implementar e gerenciar tecnologias e sistemas aplicados à área da saúde.</p>");
                break;
            
        }

    }
}