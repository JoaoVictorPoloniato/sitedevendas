document.addEventListener('DOMContentLoaded', function () {
    const secoes = document.querySelectorAll('.bloco-informativo');
    const setaEsquerda = document.getElementById('seta-esquerda');
    const setaDireita = document.getElementById('seta-direita');

    let indiceAtual = 0;
    const numSecoesVisiveis = 3;

    setaDireita.addEventListener('click', function () {
        if (indiceAtual < secoes.length - numSecoesVisiveis) {
            indiceAtual += 3; // Incrementa o índice em 3
            atualizarVisibilidadeSecoes();
        }
    });

    setaEsquerda.addEventListener('click', function () {
        if (indiceAtual >= 3) { 
            indiceAtual -= 3; 
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
    atualizarVisibilidadeSecoes();
});
