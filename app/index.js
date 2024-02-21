document.addEventListener('DOMContentLoaded', function () {
    const imagensSection = document.getElementById('imagens-section');
    const imagens = document.querySelectorAll('.imagens-section img');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');

    let imagemAtualIndex = 0;

    imagensSection.addEventListener('mouseover', () => {
        setaEsquerda.style.opacity = '1';
        setaDireita.style.opacity = '1';
    });

    imagensSection.addEventListener('mouseout', () => {
        setaEsquerda.style.opacity = '0';
        setaDireita.style.opacity = '0';
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
            } else {
                imagem.style.display = 'none';
            }
        });
    }

    function ocultarImagemAtual() {
        imagens[imagemAtualIndex].style.display = 'none';
    }
});
