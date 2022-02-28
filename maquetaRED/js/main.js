function fillFieldUsername() {
    // Busca el campo para llenar con el nombre del usuario
    let userFieldSCORM = document.getElementById('username');
    if (userFieldSCORM) {
        let getUsername = String(scorm.get("cmi.core.student_name"));
        if (getUsername !== "null") {
            let name = getUsername.split(",")
            let username = `${name[1]} ${name[0]}`;
            console.log("La API de SCORM conecta con el nombre del usuario");
            userFieldSCORM.innerHTML = username.trim();
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