document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    burgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        burgerMenu.classList.toggle('active');
    });

    // Optionnel : Ajouter une classe "menu-active" pour l'élément de menu actif
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentURL = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentURL) {
            link.parentElement.classList.add('menu-active');
        }
    });
});
