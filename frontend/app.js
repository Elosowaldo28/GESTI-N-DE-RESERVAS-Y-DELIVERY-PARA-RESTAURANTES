 async function cargarPlatos() {

    const respuesta = await fetch('http://localhost:3000/api/platos');

    const platos = await respuesta.json();

    let html = '';

    platos.forEach(plato => {

        html += `
            <li>
                ${plato.nombre} - S/. ${plato.precio}
            </li>
        `;

    });

    document.getElementById('listaPlatos').innerHTML = html;

}
function obtenerUbicacion() {

    navigator.geolocation.getCurrentPosition(

    function(posicion) {

    let latitud = posicion.coords.latitude;
    let longitud = posicion.coords.longitude;

    document.getElementById("coordenadas").innerHTML =
        "Latitud: " + latitud +
        "<br>Longitud: " + longitud +
        "<br>Precisión: " + posicion.coords.accuracy + " metros";

    var mapa = L.map('map').setView([latitud, longitud], 18);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(mapa);

    L.marker([latitud, longitud])
        .addTo(mapa)
        .bindPopup("Tu ubicación")
        .openPopup();

    },
    function(error){
    console.log(error);
    },
    {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
    }

);

}
