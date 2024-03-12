document.addEventListener('DOMContentLoaded', function () {
    const secoes = document.querySelectorAll('.bloco-informativo');
    const setaEsquerda = document.getElementById('seta-esquerda');
    const setaDireita = document.getElementById('seta-direita');

    let indiceAtual = 0;
    const numSecoesVisiveis = 3;

    setaDireita.addEventListener('click', function () {
        if (indiceAtual < secoes.length - numSecoesVisiveis) {
            indiceAtual++;
            atualizarVisibilidadeSecoes();
        }
    });

    setaEsquerda.addEventListener('click', function () {
        if (indiceAtual > 0) {
            indiceAtual--;
            atualizarVisibilidadeSecoes();
        }
    });

    function atualizarVisibilidadeSecoes() {
        secoes.forEach(function (secao, indice) {
            if (indice >= indiceAtual && indice < indiceAtual + numSecoesVisiveis) {
                secao.style.display = 'block';
            } else {
                secao.style.display = 'none';
            }
        });
    }

    // Inicializar visibilidade
    atualizarVisibilidadeSecoes();
});
