document.addEventListener('DOMContentLoaded', function () {
    const imagensSection = document.getElementById('imagens-section');
    const imagens = document.querySelectorAll('.imagens-section .background-image');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');

    let imagemAtualIndex = 0;

    imagensSection.addEventListener('mouseenter', () => {
        setaEsquerda.style.opacity = '1';
        setaDireita.style.opacity = '1';
    });

    imagensSection.addEventListener('mouseleave', () => {
        setaEsquerda.style.opacity = '0';
        setaDireita.style.opacity = '0';
    });

    setaEsquerda.addEventListener('mouseenter', () => {
        setaEsquerda.style.opacity = '1';
        setaDireita.style.opacity = '1';
    });

    setaDireita.addEventListener('mouseenter', () => {
        setaEsquerda.style.opacity = '1';
        setaDireita.style.opacity = '1';
    });

    setaEsquerda.addEventListener('click', () => {
        mostrarImagemAnterior();
    });

    setaDireita.addEventListener('click', () => {
        mostrarProximaImagem();
    });

    const temporizadorTrocaAutomatica = setInterval(() => {
        mostrarProximaImagem();
    }, 15000);

    imagens.forEach((_, index) => {
        const indicador = document.createElement('li');
        indicador.classList.add('indicador');
        indicadoresLista.appendChild(indicador);
    });

    const indicadores = document.querySelectorAll('.indicadores .indicador');

    function atualizarIndicadores() {
        indicadores.forEach((indicador, index) => {
            if (index === imagemAtualIndex) {
                indicador.classList.add('ativo');
            } else {
                indicador.classList.remove('ativo');
            }
        });
    }

    function mostrarImagemAnterior() {
        ocultarImagemAtual();
        imagemAtualIndex = (imagemAtualIndex - 1 + imagens.length) % imagens.length;
        mostrarImagemAtual();
    }

    function mostrarProximaImagem() {
        ocultarImagemAtual();
        imagemAtualIndex = (imagemAtualIndex + 1) % imagens.length;
        mostrarImagemAtual();
    }

    function mostrarImagemAtual() {
        imagens.forEach((imagem, index) => {
            if (index === imagemAtualIndex) {
                imagem.style.display = 'block';
            }
        });

        atualizarIndicadores();
    }

    function ocultarImagemAtual() {
        imagens[imagemAtualIndex].style.display = 'none';
    }
});


var numeros = ["5566996165254", "5519988885448"];
var mensagem = "Olá! Gostaria de solicitar um orçamento.";

function abrirWhatsApp() {

    var numeroEscolhido = numeros[Math.floor(Math.random() * numeros.length)];
    
    var linkWhatsApp = "https://wa.me/" + numeroEscolhido + "?text=" + encodeURIComponent(mensagem);
    
    document.getElementById("orcamentoBtn").href = linkWhatsApp;
    
    window.open(linkWhatsApp, "_blank");
}