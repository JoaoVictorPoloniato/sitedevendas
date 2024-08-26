document.addEventListener('DOMContentLoaded', function () {

    const imagensSection = document.querySelector('.slide-cliente');
    const imagens = imagensSection.querySelectorAll('.background-image-cliente');
    const setaEsquerda = document.querySelector('.seta-esquerda-cliente');
    const setaDireita = document.querySelector('.seta-direita-cliente');

    let imagemAtualIndex = 0;
    let temporizadorTrocaAutomatica;

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

    iniciarTemporizador(); 

    imagensSection.addEventListener('mouseenter', () => {
        setaEsquerda.style.opacity = '1';
        setaDireita.style.opacity = '1';
        pararTemporizador(); 
    });

    imagensSection.addEventListener('mouseleave', () => {
        setaEsquerda.style.opacity = '0';
        setaDireita.style.opacity = '0';
        iniciarTemporizador(); 
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
        pararTemporizador(); 
        mostrarImagemAnterior();
        reiniciarTemporizador(); 
    });

    setaDireita.addEventListener('click', () => {
        pararTemporizador();
        mostrarProximaImagem();
        reiniciarTemporizador();
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
        imagens[imagemAtualIndex].style.display = 'block';
        atualizarIndicadores();
    }

    function ocultarImagemAtual() {
        imagens[imagemAtualIndex].style.display = 'none';
    }

});


document.addEventListener("DOMContentLoaded", function() {
    const itensMenu = document.querySelectorAll('.item-menu');
    const conteudos = document.querySelectorAll('.conteudo');

    itensMenu.forEach(function(item) {
        item.addEventListener('click', function() {
            // Oculta todos os conteúdos
            conteudos.forEach(function(conteudo) {
                conteudo.style.display = 'none';
            });

            // Obtém o ID do conteúdo correspondente ao item clicado
            const conteudoID = this.getAttribute('data-target');

            // Mostra o conteúdo correspondente ao item clicado
            document.getElementById(conteudoID).style.display = 'block';
        });
    });
});


$(document).ready(function(){
    $('.item-menu').click(function(){
        $('.conteudo').hide();
        var target = $(this).data('target');
        $('#' + target).slideDown();
    });
});