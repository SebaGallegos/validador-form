
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
    Para ver como funciona esta expresión: https://regex101.com/r/ssWrKK/2

    Ejemplo de uso:
        validarEmail("usuario@dominio.com"); // true
        validarEmail("usuario@dominio");     // false
*/
function validarEmail(email){
    const regex = /^[a-zA-Z0-9._]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}/

    if (regex.test(email)) return true;
    return false;
}

/**
 * validarEmail(email)
 *
 * Valida si el email ingresado coincide con un formato válido.
 *
 * Parámetros:
 *   - email (string): Dirección de correo electrónico a validar.
 *
 * Retorna:
 *   - true: Si el email tiene un formato válido.
 *   - false: Si el email no cumple con el formato esperado.
 *
 * La validación se realiza comprobando:
 *   - Que haya exactamente un '@'.
 *   - Que el usuario y el dominio no estén vacíos.
 *   - Que el dominio tenga al menos un punto y no empiece ni termine con punto.
 *   - Que el usuario no empiece ni termine con punto.
 *
 * Ejemplo de uso:
 *   validarEmail("usuario@dominio.com"); // true
 *   validarEmail("usuario@dominio");     // false
 */
function validarEmail(email) {
    // Debe haber exactamente un @
    const partes = email.split("@");
    if (partes.length !== 2) return false;

    const [usuario, dominio] = partes;
    // El usuario y dominio no pueden estar vacíos
    if (!usuario || !dominio) return false;

    // El dominio debe tener al menos un punto y no puede empezar ni terminar con punto
    if (dominio.startsWith(".") || dominio.endsWith(".")) return false;
    if (dominio.indexOf(".") === -1) return false;

    // El usuario no puede empezar ni terminar con punto
    if (usuario.startsWith(".") || usuario.endsWith(".")) return false;

    return true;
}

// regex para validar contraseña
// ^(?=.*[A-Z])(?=.*[0-9])(?=.*[.#_$-]).{8,}$

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
        console.log("Completa todos los campos.");
    } else {
        if(validarEmail(email)) {
            console.log(`Formulario enviado`);
        } else {
            console.log("El correo no es correcto");
        }
    }
});


