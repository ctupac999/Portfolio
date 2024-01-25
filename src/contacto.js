// Obtener historial de datos del localStorage o inicializar como un array vacío
var historialDatos = JSON.parse(localStorage.getItem('historialDatos')) || [];

// Mostrar el historial al cargar la página
mostrarHistorialEnPantalla();

function almacenarFormulario() {
    // Obtener valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Crear un objeto con los datos del formulario
    var datosFormulario = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Agregar el objeto al historial
    historialDatos.push(datosFormulario);

    // Almacenar el historial en el localStorage
    localStorage.setItem('historialDatos', JSON.stringify(historialDatos));

    // Mostrar el historial en la página
    mostrarHistorialEnPantalla();

    // Limpiar el formulario después de almacenar los datos
    document.getElementById("miFormulario").reset();
}

function mostrarHistorialEnPantalla() {
    // Mostrar el historial en el div correspondiente
    var historialDiv = document.getElementById("historial");
    historialDiv.innerHTML = "<h2>Historial de formularios:</h2>";

    historialDatos.forEach(function (datos, index) {
        historialDiv.innerHTML += "<div class='historial-item'>" +
            "<p><strong>Nombre:</strong> " + datos.nombre + "</p>" +
            "<p><strong>Correo electrónico:</strong> " + datos.email + "</p>" +
            "<p><strong>Mensaje:</strong> " + datos.mensaje + "</p>" +
            "</div><br>";
    });
}

function borrarHistorial() {
    // Borrar el historial tanto de la pantalla como del localStorage
    historialDatos = [];
    localStorage.removeItem('historialDatos');
    mostrarHistorialEnPantalla();
}