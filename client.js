const navToggle = document.getElementById('nav-main-toggle');
const nav = document.getElementById('nav-main');

navToggle.addEventListener('click', () => { nav.classList.toggle('active'); });