document.addEventListener('DOMContentLoaded', function () {
    const imagensSection = document.getElementById('imagens-section');
    const botaoTrocarImagem = document.getElementById('trocar-imagem');

    botaoTrocarImagem.addEventListener('click', trocarImagem);

    function trocarImagem() {
        const imagens = imagensSection.querySelectorAll('img');

        imagens.forEach(imagem => {
            if (imagem.classList.contains('imagem-atual')) {
                imagem.classList.remove('imagem-atual');
                imagem.classList.add('imagem-oculta');
            } else {
                imagem.classList.remove('imagem-oculta');
                imagem.classList.add('imagem-atual');
            }
        });
    }
});

// Adicionando lógica para navegar entre as imagens ao passar o mouse sobre as imagens
const imagensSection = document.querySelector('.imagens-section');
const imagens = document.querySelectorAll('.imagens-section img');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

let imagemAtualIndex = 0;

// Exibe a seta quando o mouse está sobre as imagens
imagensSection.addEventListener('mouseover', () => {
    setaEsquerda.style.opacity = '1';
    setaDireita.style.opacity = '1';
});

// Oculta a seta quando o mouse sai das imagens
imagensSection.addEventListener('mouseout', () => {
    setaEsquerda.style.opacity = '0';
    setaDireita.style.opacity = '0';
});

// Adiciona lógica para trocar a imagem ao clicar nas setas
setaEsquerda.addEventListener('click', () => {
    imagens[imagemAtualIndex].style.display = 'none';
    imagemAtualIndex = (imagemAtualIndex - 1 + imagens.length) % imagens.length;
    imagens[imagemAtualIndex].style.display = 'block';
});

setaDireita.addEventListener('click', () => {
    imagens[imagemAtualIndex].style.display = 'none';
    imagemAtualIndex = (imagemAtualIndex + 1) % imagens.length;
    imagens[imagemAtualIndex].style.display = 'block';
});
