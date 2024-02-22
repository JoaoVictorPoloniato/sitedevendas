document.addEventListener('DOMContentLoaded', function () {
    const imagensSection = document.getElementById('imagens-section');
    const imagens = document.querySelectorAll('.imagens-section img');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');
    const infoBox = document.querySelectorAll('.info-box');
    const indicadoresLista = document.getElementById('indicadores-lista');

    let imagemAtualIndex = 0;

    imagensSection.addEventListener('mouseenter', () => {
        setaEsquerda.style.opacity = '1';
        setaDireita.style.opacity = '1';
        infoBox[imagemAtualIndex].style.opacity = '1';
    });

    imagensSection.addEventListener('mouseleave', () => {
        setaEsquerda.style.opacity = '0';
        setaDireita.style.opacity = '0';
        infoBox[imagemAtualIndex].style.opacity = '0';
    });

    setaEsquerda.addEventListener('click', () => {
        mostrarImagemAnterior();
    });

    setaDireita.addEventListener('click', () => {
        mostrarProximaImagem();
    });

    const temporizadorTrocaAutomatica = setInterval(() => {
        mostrarProximaImagem();
    }, 20000);

    // Adiciona indicadores
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
                infoBox[index].style.opacity = '1';
            } else {
                imagem.style.display = 'none';
                infoBox[index].style.opacity = '0';
            }
        });

        atualizarIndicadores();
    }

    function ocultarImagemAtual() {
        imagens[imagemAtualIndex].style.display = 'none';
    }
});
