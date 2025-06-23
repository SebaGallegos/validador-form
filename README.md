# Validador de formularios

Se encarga de validar mediante JavaScript los campos de un formulario de HTML, asegurando que los datos ingresados por el usuario cumplan con ciertos criterios antes de ser enviados a un servidor.

## Composición del proyecto

- `index.html`: Contiene el formulario que será validado.
- `assets/js/index.js`: Contiene el código que importa los módulos de validación y los ejecuta.
- `assets/js/lib/validadorForm.js`: Contiene las funciones de validación que se aplican a los campos del formulario.
- `assets/js/lib/validadorRequisitosPass.js`: Contiene la función de validación de los requisitos de la contraseña.

    > Atención: Este último es un módulo opcional, ya que se realiza la validación de los requisitos de la contraseña de manera visual que se actualiza en tiempo real, pero **no hace la validación al enviar el formulario**, eso lo hace el archivo `validadorForm.js`.