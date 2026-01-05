const hamMenu = document.querySelector('.ham__menu');


const hiddenMenu = document.querySelector('.hidden__menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hiddenMenu.classList.toggle('active');

    
})