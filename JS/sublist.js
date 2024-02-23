document.addEventListener('DOMContentLoaded', function () {
    const itemsComSubmenu = document.querySelectorAll('.has-submenu');

    itemsComSubmenu.forEach(item => {
        const submenu = item.querySelector('.submenu');

        item.addEventListener('click', () => {
            closeAllSubmenus();
            submenu.classList.toggle('show-submenu');
        });
    });

    function closeAllSubmenus() {
        itemsComSubmenu.forEach(item => {
            const submenu = item.querySelector('.submenu');
            submenu.classList.remove('show-submenu');
        });
    }
});
