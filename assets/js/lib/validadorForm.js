/*
    validarEmail(email)

    Valida si el email ingresado coincide con un formato válido
    utilizando una expresión regular.

    Parámetros:
        - email (string): Dirección de correo electrónico a validar.

    Retorna:
        - true: Si el email cumple con el formato esperado.
        - false: Si el email no cumple con el formato esperado.

    La validación se realiza con la expresión regular:
        /^[a-zA-Z0-9._]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}/

    Donde:
    - [a-zA-Z0-9._]: Se evalua que el email comience con letras (mayúsculas o minúsculas),
                    números, puntos (.) o guiones bajos (_).
    - @: Se evalua que el email contenga un símbolo arroba (@).
    - [a-zA-Z]+: Se evalua que después del símbolo arroba (@) contenga letras (mayúsculas o minúsculas).
    - \.: Se evalua que se contenga un punto (.) seguido de letras.
    - [a-zA-Z]{2,}: Se evalua que el dominio de nivel superior (como .com, .cl, .org) tenga al menos 2 letras.
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

/*
    validarPass(pass)

    Valida si la contraseña ingresada coincide con un formato válido 
    utilizando una expresión regular.

    Parámetros:
        - pass (string): Contraseña a validar.

    Retorna:
        - true: Si la contraseña cumple con el formato esperado.
        - false: Si la constraseña no cumple con el formato esperado.

    La validación se realiza con la expresión regular:
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[.#_$-]).{8,}$/
    
    Donde:
    - (?=.*[A-Z]): Se verifica que la toda la contraseña (?=) tenga al menos (.*)
                   una letra mayúscula ([A-Z]).
    - (?=.*[0-9]): Se verifica que la contraseña tenga al menos un dígito numérico ([0-9]).
    - (?=.*[.#_$-]): Se verifica que la contraseña tenga al menos un carácter especial ([.#_$-]).
    - .{8,}: Se verifica que toda la contraseña tenga al menos 8 caracteres.
    Para ver como funciona esta expresión: https://regex101.com/r/JkZV7A/1

    Ejemplo de uso:
        validarPass("test"); // false
        validarPass("Test1234"); // false
        validarPass("Test1234."); // true
*/
function validarPass(pass) {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[.#_$-]).{8,}$/

    if (regex.test(pass)) return true;
    return false;
}

// Función prinicipal que se ejecuta al cargar el múdulo
// Se encarga de validar el formulario
// Parámetros:
// - idFormulario: ID del formulario a validar.
// - idCampoNombre: ID del campo de nombre.
// - idCampoEmail: ID del campo de email.
// - idCampoPass: ID del campo de contraseña.
export default function validarForm(idFormulario, idCampoNombre, idCampoEmail, idCampoPass) {
    // Se espera a que el usuario envíe el formulario
    // Concretamente se espera al evento "submit"
    // Se utiliza el ID del formulario para obtener el elemento del DOM
    document.getElementById(idFormulario).addEventListener("submit", function(e) {
        // Para evitar en primera instancia el envío del formulario
        e.preventDefault();

        // Se obtiene el valor (.value) de los campos del formulario, seguido
        // de eliminar los espacios en blanco al inicio y al final con trim()
        const nombre = document.getElementById(idCampoNombre).value.trim();
        const email = document.getElementById(idCampoEmail).value.trim();
        const pass = document.getElementById(idCampoPass).value.trim();

        // Validación 1: verificar que los campos no estén vacíos
        // Si alguno de los campos está vacío, se muestra un mensaje de alerta
        // y no se envía el formulario.
        if (nombre === "" || email === "" || pass === "") {
            alert("Completa todos los campos.");
        } else {
            // Validación 2: verificar el formato del email y la contraseña
            // Si el email es válido y la contraseña cumple con los requisitos,
            // se muestra un mensaje de éxito. De lo contrario, se muestra un mensaje de error
            // indicando cuál de los dos campos no es correcto.
            if (validarEmail(email) && validarPass(pass)) {
                alert("Formulario enviado.");
            } else {
                if (!validarEmail(email)) {
                    alert("El correo no es correcto.");
                } else if (!validarPass(pass)) {
                    alert("La clave no es correcta.");
                }
            }
        }
    });
};
