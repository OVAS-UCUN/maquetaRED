function fillFieldUsername() {
    // Busca el campo para llenar con el nombre del usuario
    let userFieldSCORM = document.getElementById('username');
    if (userFieldSCORM) {
        let getUsername = String(scorm.get("cmi.core.student_name"));
        if (getUsername !== "null") {
            console.log("La API de SCORM conecta con el nombre del usuario");
            userFieldSCORM.innerHTML = getUsername;
        }
    }
}

window.addEventListener("load", function() {
    console.log("Todos los recursos del SCORM terminaron de cargar!");
    fillFieldUsername();

    let nextBtn = document.getElementById('nextSlide');
    nextBtn.addEventListener("click", function() {
        doContinue("completed");
    });
});