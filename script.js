//rutas del navbar//
function abrirOtraPaginaGrampas() {
    window.open("grampastipoomega.html","_blank");
}
function abrirOtraPaginaGrampasMedio() {
    window.open("grampastipomedio.html","_blank");
}

function abrirOtraPaginaGrampasDeAmurar() {
    window.open("grampasdeamurar.html","_blank");
}
function abrirOtraPaginaFlejes() {
    window.open("flejes.html","_blank");
}
function abrirOtraPaginaSoportes() {
    window.open("soportes.html","_blank");
}
document.getElementById('whatsappButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace haga su acción predeterminada
    const phoneNumber = '5491141638782'; // Reemplaza con tu número de teléfono de WhatsApp en formato internacional sin espacios ni guiones
    const message = 'Hola, quiero más información'; // Mensaje opcional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
});