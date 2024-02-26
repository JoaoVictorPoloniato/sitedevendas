document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".clientes-slider");
    const container = document.querySelector(".clientes-container");
    const clientes = document.querySelectorAll(".cliente");
    const totalClientes = clientes.length;
    const clientWidth = clientes[0].offsetWidth;
    const visibleClientes = Math.floor(container.offsetWidth / clientWidth);

    for (let i = 0; i < visibleClientes; i++) {
        const clone = clientes[i].cloneNode(true);
        container.appendChild(clone);
    }

    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

   // slider.addEventListener("mousedown", handleDragStart);
   // slider.addEventListener("touchstart", handleDragStart);

   // slider.addEventListener("mousemove", handleDragMove);
   // slider.addEventListener("touchmove", handleDragMove);

   // slider.addEventListener("mouseup", handleDragEnd);
   // slider.addEventListener("touchend", handleDragEnd);

   function handleDragStart(e) {
        isDragging = true;
        startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    }

    function handleDragMove(e) {
        if (!isDragging) return;

        const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        const diffX = currentX - startX;

        container.style.transform = `translateX(${-currentIndex * clientWidth + diffX}px)`;
    }

    function handleDragEnd(e) {
        if (!isDragging) return;

        const currentX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
        const diffX = currentX - startX;

        if (Math.abs(diffX) > clientWidth / 2) {
            currentIndex = diffX > 0 ? currentIndex - 1 : currentIndex + 1;
         }

        updateSlider();

        isDragging = false;
    }

    function updateSlider() {
        const newPosition = -currentIndex * clientWidth;
        container.style.transition = "transform 0.3s ease-in-out";
        container.style.transform = `translateX(${newPosition}px)`;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % (totalClientes - visibleClientes + 1);
        updateSlider();
    }

    const intervalId = setInterval(autoSlide, 3000);

    slider.addEventListener("mouseenter", function () {
        clearInterval(intervalId);
    });

    slider.addEventListener("mouseleave", function () {
        setInterval(autoSlide, 3000);
    });
});
