
// Validador de requisitos de contraseña
// ATENCIÓN:
// Es solo de carácter decorativo y visual, no afecta la validación del formulario en sí
// Para validar el formulario, utilizar el módulo ./validadorForm.js

// ValidarRequisitosPass(idCampoPass, idTextoReqMayus, idTextoReqNum, idTextoReqEspecial, idTextoReqLargo)
// Valida los requisitos de una contraseña ingresada en un campo de formulario.
export default function validarRequisitosPass(idCampoPass, idTextoReqMayus, idTextoReqNum, idTextoReqEspecial, idTextoReqLargo) {
    // Se espera a que el usuario ingrese un valor en el campo de contraseña
    // Concretamente se espera al evento "input"
    // Se utiliza el ID del campo de contraseña para obtener el elemento del DOM
    document.getElementById(idCampoPass).addEventListener("input", function (e) {
        // Se obtiene el valor del campo de contraseña
        const pass = e.target.value;

        // Y se comprueba si cumple con los requisitos de:
        const tieneMayus = /[A-Z]/.test(pass); // Al menos una letra mayúscula
        const tieneNum = /[0-9]/.test(pass); // Al menos un dígito numérico
        const tieneEspecial = /[.#_$-]/.test(pass); // Al menos un carácter especial (., #, _, $, -)
        const tieneLargo = pass.length >= 8; // Al menos 8 caracteres de largo

        // Se actualizan los textos de requisitos de contraseña
        // Mediante el ID de cada texto, se cambia su clase de Bootstrap
        document.getElementById(idTextoReqMayus).className = tieneMayus ? "text-success d-block" : "text-danger d-block";
        document.getElementById(idTextoReqNum).className = tieneNum ? "text-success d-block" : "text-danger d-block";
        document.getElementById(idTextoReqEspecial).className = tieneEspecial ? "text-success d-block" : "text-danger d-block";
        document.getElementById(idTextoReqLargo).className = tieneLargo ? "text-success d-block" : "text-danger d-block";
    });
}