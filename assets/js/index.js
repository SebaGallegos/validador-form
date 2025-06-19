
/*
    validarEmail(email)

    Valida si el email ingresado coincide con un formato válido utilizando una expresión regular.

    Parámetros:
        - email (string): Dirección de correo electrónico a validar.

    Retorna:
        - true: Si el email tiene un formato válido.
        - false: Si el email no cumple con el formato esperado.

    La validación se realiza con la expresión regular:
        /^[a-zA-Z0-9._]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}/
    Para ver como funciona esta expresión: 
    https://regex101.com/r/ssWrKK/2

    Ejemplo de uso:
        validarEmail("usuario@dominio.com"); // true
        validarEmail("usuario@dominio");     // false
*/
function validarEmail(email){
    const regex = /^[a-zA-Z0-9._]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}/

    if (regex.test(email)) return true;
    return false;
}

// Función prinicipal que se ejecuta al cargar la página
// Se encarga de validar el formulario
document.getElementById("formulario").addEventListener("submit", function(e) {
    // Para evitar en primera instancia el envío del formulario
    e.preventDefault();

    // Se obtienen los campos del formulario
    const nombre = document.getElementById("inp-nombre").value.trim();
    const email = document.getElementById("inp-email").value.trim();
    const pass = document.getElementById("inp-pass").value.trim();

    if (nombre === "" || email === "" || pass === "") {
        alert("Completa todos los campos.");
    } else {
        alert(`Formulario enviado`);
    }
});


