// NuevoContacto.js

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        alert('El contacto se ha agregado correctamente.');
    });
});
