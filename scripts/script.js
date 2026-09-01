const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const mobileLinks = mobileMenu.querySelectorAll('a');
const themeToggle = document.querySelector('.theme-toggle');


window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


function openMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
}


function closeMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
}


menuToggle.addEventListener('click', () => {
    openMenu();
});


menuClose.addEventListener('click', () => {
    closeMenu();
});


menuOverlay.addEventListener('click', () => {
    closeMenu();
});


mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});