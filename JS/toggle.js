
function toggleSubMenu(index) {
    var subMenus = document.querySelectorAll('.menu-segundario');
    subMenus.forEach(function (subMenu, i) {
        if (i !== index) {
            subMenu.style.display = 'none';
        }
    });
    subMenus[index].style.display = subMenus[index].style.display === 'none' ? 'block' : 'none';
}
function hideSubMenu(index) {
    var subMenus = document.querySelectorAll('.menu-segundario');
    subMenus[index].style.display = 'none';
}
window.addEventListener('load', function () {
    hideSubMenu(0);
});
