let reportes = [];

function agregarReporte() {
    let nombre = document.getElementById("nombreReporte").value;
    let fecha = document.getElementById("fechaReporte").value;
    let monto = document.getElementById("montoReporte").value;

    if (nombre && fecha && monto) {
        reportes.push({ nombre, fecha, monto });
        actualizarTabla();
        limpiarCampos();
    } else {
        alert("Por favor, llena todos los campos.");
    }
}

function actualizarTabla() {
    let tabla = document.getElementById("tablaReportes");
    tabla.innerHTML = "";

    reportes.forEach((rep, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${rep.nombre}</td>
                <td>${rep.fecha}</td>
                <td>$${rep.monto}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarReporte(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarReporte(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

