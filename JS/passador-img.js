document.addEventListener('DOMContentLoaded', function () {
    const imagensSection = document.querySelector('.imagens-section');
    const blocosImagem = document.querySelectorAll('.bloco-imagem');
    const setaEsquerda = document.getElementById('seta-esquerda');
    const setaDireita = document.getElementById('seta-direita');

    let indiceAtual = 0;
    const numImagensVisiveis = 3;

    setaDireita.addEventListener('click', function () {
        if (indiceAtual < blocosImagem.length - numImagensVisiveis) {
            indiceAtual++;
            atualizarVisibilidadeImagens();
        }
    });

    setaEsquerda.addEventListener('click', function () {
        if (indiceAtual > 0) {
            indiceAtual--;
            atualizarVisibilidadeImagens();
        }
    });

    function atualizarVisibilidadeImagens() {
        blocosImagem.forEach(function (bloco, indice) {
            if (indice >= indiceAtual && indice < indiceAtual + numImagensVisiveis) {
                bloco.style.display = 'block';
            } else {
                bloco.style.display = 'none';
            }
        });
    }

    // Inicializar visibilidade
    atualizarVisibilidadeImagens();
});
