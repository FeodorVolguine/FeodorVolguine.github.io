const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => { nav.classList.toggle('active'); });