"use strict";

// Afficher le menu avec un toggle
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
});