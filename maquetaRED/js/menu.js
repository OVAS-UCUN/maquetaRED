const menu_button = document.querySelector('#menu_desplegable');
const show_menu = document.querySelector('.Header__submenu');
const pc = window.matchMedia('screen and (max-width:1920px)');

pc.addListener(validation)

function validation(event) {
    if (event.matches) {
        menu_button.addEventListener('click', hidshow)

    } else {
        menu_button.removeEventListener('click', hidshow)

    }

}

validation(pc);

function hidshow() {
    if (show_menu.classList.contains('is-active')) {
        show_menu.classList.remove('is-active');

    } else {
        show_menu.classList.add('is-active');
    }
}