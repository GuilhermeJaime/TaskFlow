const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const mobileLinks = mobileMenu.querySelectorAll('a');
const themeToggle = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('taskflow-theme');

// =========================================================
// HEADER — SCROLL
// =========================================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// =========================================================
// MENU MOBILE
// =========================================================

function openMenu() {
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
}

menuToggle.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

menuOverlay.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// =========================================================
// TEMA
// =========================================================

if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
}

function updateThemeButton() {
    const isDark = document.documentElement.classList.contains('dark');

    themeToggle.setAttribute('aria-pressed', String(isDark));

    themeToggle.setAttribute(
        'aria-label',
        isDark
            ? 'Activar modo claro'
            : 'Activar modo escuro'
    );
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');

    localStorage.setItem(
        'taskflow-theme',
        isDark ? 'dark' : 'light'
    );

    updateThemeButton();
});

// =========================================================
// LUCIDE
// =========================================================

lucide.createIcons();

// Estado inicial do botão
updateThemeButton();