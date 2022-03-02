function firstLetterUp(string) {
    string = string.trim().toLowerCase();
    let words = string.split(' ');
    if (words.length == 2) {
        return `${words[0].charAt(0).toUpperCase()}${words[0].slice(1)} ${words[1].charAt(0).toUpperCase()}${words[1].slice(1)}`;
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}


function fillFieldUsername() {
    // Busca el campo para llenar con el nombre del usuario
    let userFieldSCORM = document.getElementById('username');
    if (userFieldSCORM) {
        let getUsername = String(scorm.get("cmi.core.student_name"));
        if (getUsername !== "null") {
            let name = getUsername.split(",");
            let username = `${firstLetterUp(name[1])} ${firstLetterUp(name[0])}`;
            console.log(username);
            userFieldSCORM.innerHTML = username;
        }
    }
}

window.addEventListener("load", function() {
    console.log("Todos los recursos del SCORM terminaron de cargar!");
    fillFieldUsername();

    let nextBtn = document.getElementById('nextSlide');
    if (nextBtn) {
        nextBtn.addEventListener("click", function() {
            doContinue("completed");
        });
    }
});