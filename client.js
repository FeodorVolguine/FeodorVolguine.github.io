//Utility
const Clamp = (x, min, max) => Math.min(Math.max(x, min), max);

//Main navigation
const navToggle = document.getElementById('nav-main-toggle');
const nav = document.getElementById('nav-main');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('expanded');

    let wasExpanded = navToggle.getAttribute('aria-expanded');
    navToggle.setAttribute('aria-expanded', (wasExpanded == 'true') ? 'false' : 'true');

    nav.classList.toggle('expanded');
});

//Initialize image comparison
function InitializeImageComparison()
{
    const overlay = document.getElementById('comparison-image-overlay');
    let width = overlay.offsetWidth, height = overlay.offsetHeight;
    overlay.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
    
    let isMouseHover = false;
    const comparisonContainer = document.getElementById('comparison-container');
    comparisonContainer.addEventListener('mouseover', (event) => { isMouseHover = true; });
    comparisonContainer.addEventListener('mouseleave', (event) => { isMouseHover = false; });
    
    //Initialize slider
    let slider = document.getElementById('comparison-slider');
    slider.style.top = (height / 2) - (slider.offsetHeight / 2) + 'px';
    slider.style.left = (width / 2) - (slider.offsetWidth / 2) + 'px';
    
    function UpdateComparison(event)
    {
        if(isMouseHover)
        {
            //Calculate relative cursor position
            event = event.changedTouches ? event.changedTouches[0] : event;
            let position = event.pageX - overlay.getBoundingClientRect().left;
            position = Clamp(position, 0, width);
    
            //Update
            overlay.style.clipPath = 'polygon(0 0, ' + position + 'px 0, ' + position + 'px 100%, 0 100%)';
            slider.style.left = position - (slider.offsetWidth / 2) + 'px';
        }
    }
    
    window.addEventListener('mousemove', UpdateComparison);
    window.addEventListener('touchmove', UpdateComparison);
}