const menu_button = document.querySelector('#menu_desplegable');
const show_menu = document.querySelector('.Header__submenu');
const pc = window.matchMedia('screen and (max-width:1920px)');

pc.addListener(validation_hover)


function validation_hover(event) {
    if (event.matches) {
        menu_button.addEventListener("mouseover", function(event) {
            show_menu.classList.add('is-active_hover');

            setTimeout(function() {
                show_menu.classList.remove('is-active_hover');
            }, 5000);
        }, false);
    }
}

validation_hover(pc);

function validation_enter(event) {
    if (event.matches) {
        menu_button.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                // code for enter
                show_menu.classList.add('is-active_hover');

                setTimeout(function() {
                    show_menu.classList.remove('is-active_hover');
                }, 5000);
            }

        }, false);

    }
}

validation_enter(pc);