document.addEventListener('DOMContentLoaded', function () {
    // Seletor para todos os itens de menu com sublistas
    const itemsComSubmenu = document.querySelectorAll('.has-submenu');

    // Adiciona um evento de clique a cada item de menu com submenu
    itemsComSubmenu.forEach(item => {
        const submenu = item.querySelector('.submenu');
        
        // Oculta as sublistas inicialmente
        submenu.style.display = 'none';

        item.addEventListener('click', () => {
            // Fecha todas as sublistas antes de abrir a selecionada
            closeAllSubmenus();
            // Alterna a visibilidade da sublista
            submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        });
    });

    function closeAllSubmenus() {
        // Fecha todas as sublistas
        itemsComSubmenu.forEach(item => {
            const submenu = item.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    }

    // Restante do seu código JavaScript...
});
