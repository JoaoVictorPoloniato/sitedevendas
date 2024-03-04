var numeros = ["5566996165254", "5519988885448"];
var mensagem = "Olá vi sobre o sistema LINX FARMA BIG e gostaria de falar sobre um orçamento do mesmo.";

function abrirWhatsApp(){

    var numeroEscolhido = numeros[Math.floor(Math.random() * numeros.length)];

    var linkWhatsApp = "https://wa.me/" + numeroEscolhido + "?text=" + encodeURIComponent(mensagem);

    document.getElementById("orcamentoBtn").href = linkWhatsApp;

    window.open(linkWhatsApp, "_blank");
    
}