const URL_GOOGLE_SHEETS =
    "https://script.google.com/macros/s/AKfycbw5cemWp_AarXOiLkz0oT6FxmXPOAZ1onq08-Kg2VOdQN0lKArQRB46L6r6HKGpiS90/exec";


// ==========================================
// MOSTRAR REGISTRO
// ==========================================

function mostrarRegistro() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("registro").style.display = "block";
}


// ==========================================
// VOLVER AL INICIO
// ==========================================

function volverInicio() {

    document.getElementById("registro").style.display = "none";

    document.getElementById("inicio").style.display = "flex";
}


// ==========================================
// REGISTRAR USUARIO
// ==========================================

async function registrarUsuario(event) {

    // Evita que la página se recargue
    event.preventDefault();


    // ======================================
    // OBTENER LOS DATOS DEL FORMULARIO
    // ======================================

    const nombre =
        document.getElementById("nombre").value.trim();

    const numero =
        document.getElementById("numero").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const zona =
        document.getElementById("zona").value.trim();


    // ======================================
    // VALIDAR NOMBRE
    // ======================================

    const nombreValido =
        /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    if (!nombreValido.test(nombre)) {

        alert(
            "El nombre solo puede contener letras y espacios. ❌"
        );

        return;
    }


    // ======================================
    // VALIDAR NÚMERO
    // ======================================

    const numeroValido =
        /^[0-9]{9}$/;

    if (!numeroValido.test(numero)) {

        alert(
            "El número debe tener exactamente 9 dígitos. ❌"
        );

        return;
    }


    // ======================================
    // VALIDAR CORREO
    // ======================================

    const correoValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoValido.test(correo)) {

        alert(
            "Ingresa un correo electrónico válido. ❌"
        );

        return;
    }


    // ======================================
    // VALIDAR ZONA
    // ======================================

    if (zona.length < 2) {

        alert(
            "Ingresa una zona de residencia válida. ❌"
        );

        return;
    }


    // ======================================
    // CREAR LOS DATOS
    // ======================================

    const datos = {

        nombre: nombre,

        numero: numero,

        correo: correo,

        zona: zona

    };


    // ======================================
    // DESACTIVAR BOTÓN
    // ======================================

    const boton =
        document.querySelector(".boton-crear");

    boton.disabled = true;

    boton.textContent = "GUARDANDO...";


    // ======================================
    // ENVIAR A GOOGLE SHEETS
    // ======================================

    try {

        await fetch(
            URL_GOOGLE_SHEETS,
            {
                method: "POST",

                mode: "no-cors",

                body: JSON.stringify(datos)
            }
        );


        // ==================================
        // REGISTRO CORRECTO
        // ==================================

        alert(
            "¡Registro realizado correctamente! 🎉"
        );


        // ==================================
        // LIMPIAR FORMULARIO
        // ==================================

        document.getElementById("nombre").value = "";

        document.getElementById("numero").value = "";

        document.getElementById("correo").value = "";

        document.getElementById("zona").value = "";


        // ==================================
        // VOLVER AL INICIO
        // ==================================

        volverInicio();


    } catch (error) {

        console.error(error);

        alert(
            "No se pudo guardar el registro. 😥"
        );

    }


    // ======================================
    // VOLVER A ACTIVAR BOTÓN
    // ======================================

    boton.disabled = false;

    boton.textContent = "CREAR CUENTA";

}