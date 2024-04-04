document.addEventListener('DOMContentLoaded', function () {
    const imagensSection = document.getElementById('imagens-section');
    const imagens = document.querySelectorAll('.imagens-section .background-image');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');

    let imagemAtualIndex = 0;
    let temporizadorTrocaAutomatica; // Declaramos a variável para armazenar o temporizador

    function iniciarTemporizador() {
        temporizadorTrocaAutomatica = setInterval(() => {
            mostrarProximaImagem();
        }, 10000);
    }

    function pararTemporizador() {
        clearInterval(temporizadorTrocaAutomatica);
    }

    function reiniciarTemporizador() {
        pararTemporizador();
        iniciarTemporizador();
    }

    iniciarTemporizador(); // Iniciar o temporizador quando o script for carregado

    imagensSection.addEventListener('mouseenter', () => {
        setaEsquerda.style.opacity = '1';
        setaDireita.style.opacity = '1';
        pararTemporizador(); // Quando o mouse entra na área das imagens, paramos o temporizador
    });

    imagensSection.addEventListener('mouseleave', () => {
        setaEsquerda.style.opacity = '0';
        setaDireita.style.opacity = '0';
        iniciarTemporizador(); // Quando o mouse sai da área das imagens, iniciamos o temporizador novamente
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
        pararTemporizador(); // Quando a seta esquerda é clicada, paramos o temporizador
        mostrarImagemAnterior();
        reiniciarTemporizador(); // Reiniciamos o temporizador após a troca de imagem
    });

    setaDireita.addEventListener('click', () => {
        pararTemporizador(); // Quando a seta direita é clicada, paramos o temporizador
        mostrarProximaImagem();
        reiniciarTemporizador(); // Reiniciamos o temporizador após a troca de imagem
    });

    const indicadoresLista = document.getElementById('indicadores-lista'); // Adicionando a seleção do elemento para adicionar os indicadores

    imagens.forEach((_, index) => {
        const indicador = document.createElement('li');
        indicador.classList.add('indicador');
        indicadoresLista.appendChild(indicador);

        indicador.addEventListener('click', () => {
            pararTemporizador(); // Quando um indicador é clicado, paramos o temporizador
            mostrarImagem(index); // Quando clicado em um indicador, mostra a imagem correspondente
            reiniciarTemporizador(); // Reiniciamos o temporizador após a troca de imagem
        });
    });

    function mostrarImagem(index) {
        ocultarImagemAtual();
        imagemAtualIndex = index;
        mostrarImagemAtual();
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
        imagens[imagemAtualIndex].style.display = 'block'; // Mostra a imagem atual
        atualizarIndicadores();
    }

    function ocultarImagemAtual() {
        imagens[imagemAtualIndex].style.display = 'none'; // Oculta a imagem atual
    }

    function atualizarIndicadores() {
        const indicadores = document.querySelectorAll('.indicadores .indicador');
        indicadores.forEach((indicador, index) => {
            if (index === imagemAtualIndex) {
                indicador.classList.add('ativo'); // Adiciona a classe 'ativo' para indicar que está selecionado
            } else {
                indicador.classList.remove('ativo'); // Remove a classe 'ativo' dos outros indicadores
            }
        });
    }
});
