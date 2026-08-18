function mostrarRegistro() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("registro").style.display = "block";
}


function volverInicio() {

    document.getElementById("registro").style.display = "none";

    document.getElementById("inicio").style.display = "block";
}


function registrarUsuario(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const numero = document.getElementById("numero").value;
    const correo = document.getElementById("correo").value;
    const zona = document.getElementById("zona").value;

    alert(
        "¡Registro realizado!\n\n" +
        "Nombre: " + nombre + "\n" +
        "Número: " + numero + "\n" +
        "Correo: " + correo + "\n" +
        "Zona: " + zona
    );
}