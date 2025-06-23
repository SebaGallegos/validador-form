import validarForm from "./lib/validadorForm.js";

// Se ejecuta la función validarForm al cargar la página
// Se pasan los IDs en orden:
// campo del nombre, campo del email y campo de la contraseña
validarForm("inp-nombre", "inp-email", "inp-pass");