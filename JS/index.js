document.addEventListener('DOMContentLoaded', function () {
    const imagensSection = document.getElementById('imagens-section');
    const imagens = document.querySelectorAll('.imagens-section .background-image');
    const setaEsquerda = document.querySelector('.seta-esquerda');
    const setaDireita = document.querySelector('.seta-direita');
    const infoBox = document.querySelectorAll('.info-box');
    const indicadoresLista = document.getElementById('indicadores-lista');

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

//                setTimeout(() => {
 //                   infoBox[index].style.opacity = '1';
 //               }, 500);
 //           } else {
//                imagem.style.display = 'none';
 //               infoBox[index].style.opacity = '0';
            }
        });

        atualizarIndicadores();
    }

    function ocultarImagemAtual() {
        imagens[imagemAtualIndex].style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const itemsComSubmenu = document.querySelectorAll('.has-submenu');
    const indicadoresLista = document.getElementById('indicadores-lista');

    itemsComSubmenu.forEach((item, index) => {
        const submenu = item.querySelector('.submenu');

        item.addEventListener('click', () => {
            closeAllSubmenus();
            submenu.classList.toggle('show-submenu');
            updateIndicadores(index);
        });
    });

    function closeAllSubmenus() {
        itemsComSubmenu.forEach(item => {
            const submenu = item.querySelector('.submenu');
            submenu.classList.remove('show-submenu');
        });
    }

    function updateIndicadores(index) {
        // Limpa os indicadores existentes
        indicadoresLista.innerHTML = '';

        // Adiciona indicadores para cada imagem
        for (let i = 0; i < itemsComSubmenu.length; i++) {
            const indicador = document.createElement('li');
            indicador.classList.add('indicador');
            if (i === index) {
                indicador.classList.add('ativo');
            }
            indicadoresLista.appendChild(indicador);
        }
    }
});
