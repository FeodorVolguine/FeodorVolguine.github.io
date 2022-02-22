const navToggle = document.getElementById('nav-main-toggle');
const nav = document.getElementById('nav-main');

navToggle.addEventListener('click', () => { navToggle.classList.toggle('active'); nav.classList.toggle('active'); });

const workExperienceCards = document.getElementById('workExperienceCards');

let currentScrollPosition = { x: 0, y: 0 };
let mousePosition = { x: 0, y: 0 };

workExperienceCards.addEventListener('mousedown', (event) =>
{
    workExperienceCards.style.cursor = 'grabbing';
    workExperienceCards.style.userSelect = 'none';

    currentScrollPosition = { x: workExperienceCards.scrollLeft, y: workExperienceCards.scrollTop };
    mousePosition = { x: event.clientX, y: event.clientY };

    document.addEventListener('mousemove', MouseMoveEvent);
    document.addEventListener('mouseup', MouseUpEvent);
});

function MouseMoveEvent(event)
{
    workExperienceCards.scrollLeft = currentScrollPosition.x - (event.clientX - mousePosition.x);
    workExperienceCards.scrollTop = currentScrollPosition.y - (event.clientY - mousePosition.y);
}

function MouseUpEvent()
{
    workExperienceCards.style.cursor = 'grab';
    workExperienceCards.style.removeProperty('user-select');

    document.removeEventListener('mousemove', MouseMoveEvent);
    document.removeEventListener('mouseup', MouseUpEvent);
}