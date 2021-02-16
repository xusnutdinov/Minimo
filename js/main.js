/* MENU-BURGER */

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

/* LOAD MORE */

const loadMorBtn = document.querySelector('#load-more');
const articles = document.querySelectorAll('.article-row');
let currentItems = 0;
for (let i = 0; i < 3; i++) {
    articles[i].style.display = 'flex';
    currentItems += 1;
    if (currentItems === articles.length) {
        loadMorBtn.style.display = "none";
    }
}

loadMorBtn.addEventListener('click', function (event) {
    event.preventDefault();
    articles[currentItems].style.display = "flex";
    currentItems += 1;
    if (currentItems === articles.length) {
        loadMorBtn.style.display = "none";
    }
})