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

async function registrar() {

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const respuesta = await fetch('http://localhost:3000/api/register', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            nombre,
            email,
            password,
            rol: 'cliente'
        })

    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

}


async function login() {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const respuesta = await fetch('http://localhost:3000/api/login', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            email,
            password
        })

    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

}

async function registrarReserva() {

    const id_usuario = document.getElementById('id_usuario').value;
    const fecha_reserva = document.getElementById('fecha_reserva').value;
    const cantidad_personas = document.getElementById('cantidad_personas').value;

    const respuesta = await fetch('http://localhost:3000/api/reservas', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            id_usuario,
            fecha_reserva,
            cantidad_personas
        })

    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

}

async function registrarPedido() {

    const id_usuario = document.getElementById('id_usuario_pedido').value;
    const total = document.getElementById('total').value;
    const estado = document.getElementById('estado').value;
    const latitud = document.getElementById('latitud').value;
    const longitud = document.getElementById('longitud').value;

    const respuesta = await fetch('http://localhost:3000/api/pedidos', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            id_usuario,
            total,
            estado,
            latitud,
            longitud
        })

    });

    const datos = await respuesta.json();

    alert(datos.mensaje);

}

async function cargarDashboard() {

    const respuesta = await fetch(
        'http://localhost:3000/api/dashboard'
    );

    const datos = await respuesta.json();

    document.getElementById('usuarios').innerHTML = datos.usuarios;

    document.getElementById('platos').innerHTML = datos.platos;

    document.getElementById('reservas').innerHTML = datos.reservas;

    document.getElementById('pedidos').innerHTML = datos.pedidos;

}

}
