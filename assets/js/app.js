const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const html = document.querySelector('html');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('disable-scroll');
    html.classList.toggle('disable-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
