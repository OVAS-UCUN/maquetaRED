const menu_button_enter = document.querySelector('.Header__menu--icon');
let show_menu_enter = document.querySelector('.Header__submenu');
const pc_enter = window.matchMedia('screen and (max-width:1920px)');

pc_enter.addListener(validation_enter)


function validation_enter(event) {
    if (event.matches) {
        menu_button_enter.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                // code for enter
                show_menu_enter.classList.add('is-active_hover');

                setTimeout(function() {
                    show_menu_enter.classList.remove('is-active_hover');
                }, 5000);
            }

        }, false);

    }
}

validation_enter(pc_enter);