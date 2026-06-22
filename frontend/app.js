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
