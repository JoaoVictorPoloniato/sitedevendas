// Adicione ao seu arquivo JS/clientes.js

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".clientes-slider");
    const container = document.querySelector(".clientes-container");
    const setaEsquerda = document.querySelector(".setinha-esquerda");
    const setaDireita = document.querySelector(".setinha-direita");

    const clientes = document.querySelectorAll(".cliente");
    const totalClientes = clientes.length;
    const clientWidth = clientes[0].offsetWidth;
    const visibleClientes = Math.floor(container.offsetWidth / clientWidth);

    // Clone os clientes para criar um loop infinito
    for (let i = 0; i < visibleClientes; i++) {
        const clone = clientes[i].cloneNode(true);
        container.appendChild(clone);
    }

    let currentIndex = 0;

    setaDireita.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalClientes;
        updateSlider();
    });

    setaEsquerda.addEventListener("click", function () {
        if (currentIndex === 0) {
            currentIndex = totalClientes - visibleClientes;
        } else {
            currentIndex = Math.max(0, currentIndex - 1);
        }
        updateSlider();
    });

    function updateSlider() {
        const newPosition = -currentIndex * clientWidth;
        container.style.transform = `translateX(${newPosition}px)`;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % (totalClientes - visibleClientes + 1);
        updateSlider();
    }

    const intervalId = setInterval(autoSlide, 2000);

    slider.addEventListener("mouseenter", function () {
        clearInterval(intervalId);
    });

    slider.addEventListener("mouseleave", function () {
        setInterval(autoSlide, 2000);
    });
});
