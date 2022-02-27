const navToggle = document.getElementById('nav-main-toggle');
const nav = document.getElementById('nav-main');

navToggle.addEventListener('click', () => { navToggle.classList.toggle('active'); nav.classList.toggle('active'); });