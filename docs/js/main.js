const menuToggle = document.querySelector('.toggle-menu');
const mobMenu = document.querySelector('.nav-menu');
const overlayEl = document.querySelector('#overlay');
const bodyEl = document.body;


// Клик по иконке гамбургер
menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlayEl.classList.toggle('active');
    bodyEl.classList.toggle('noscroll');
});

// Клик по моб меню
mobMenu.addEventListener('click', function() {
    this.classList.remove('active');
    menuToggle.classList.remove('active');
    overlayEl.classList.remove('active');
    bodyEl.classList.remove('noscroll');
});

// Закрытие моб меню при клике по оверлею
overlayEl.addEventListener('click', function() {
    this.classList.remove('active');
    mobMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    bodyEl.classList.remove('noscroll');
});

// Закрытие моб меню при ресайзе экрана
window.addEventListener('resize', function() {
    mobMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlayEl.classList.remove('active');
    bodyEl.classList.remove('noscroll');
});


// document.querySelector('.menu-icon-wrapper').onclick = function(){
//     document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
//     document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
// }

