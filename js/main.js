const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');
const body = document.body;

menuBurger.addEventListener('click', function (event) {
    if (event.currentTarget.classList.contains('active')) {
        closeMenu();
    } else {
        menu.classList.add('active');
        event.currentTarget.classList.add('active');
        body.classList.add('lock');
    }
});

function closeMenu() {
    menuBurger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
}
