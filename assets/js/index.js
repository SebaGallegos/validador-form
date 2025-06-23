// Se importan los módulos, en este caso se encuentran en la carpeta "lib"
import validarForm from "./lib/validadorForm.js";
import validarRequisitosPass from "./lib/validadorRequisitosPass.js";

// Se ejecuta la función validarForm al cargar la página
// Se pasan los IDs en orden:
// formulario, campo del nombre, campo del email y campo de la contraseña
validarForm("formulario", "inp-nombre", "inp-email", "inp-pass");

// OPCIONAL: Esta función es solo decorativa y visual, no afecta la validación del formulario
// Se ejecuta la función validarRequisitosPass al cargar la página
// Se pasan los IDs en orden:
// campo de la contraseña, texto de requisitos de mayúsculas, texto de requisitos de números,
// texto de requisitos de caracteres especiales y texto de requisitos de largo
validarRequisitosPass(
    "inp-pass",
    "req-mayus",
    "req-num",
    "req-especial",
    "req-largo"
)