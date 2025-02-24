let empleados = [];

function agregarEmpleado() {
    let nombre = document.getElementById("nombreEmpleado").value;
    let cargo = document.getElementById("cargoEmpleado").value;
    let salario = document.getElementById("salarioEmpleado").value;

    if (nombre && cargo && salario) {
        empleados.push({ nombre, cargo, salario });
        actualizarTabla();
        limpiarCampos();
    } else {
        alert("Por favor, llena todos los campos.");
    }
}

function actualizarTabla() {
    let tabla = document.getElementById("tablaEmpleados");
    tabla.innerHTML = "";

    empleados.forEach((emp, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${emp.nombre}</td>
                <td>${emp.cargo}</td>
                <td>$${emp.salario}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarEmpleado(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarEmpleado(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function limpiarCampos() {
    document.getElementById("nombreEmpleado").value = "";
    document.getElementById("cargoEmpleado").value = "";
    document.getElementById("salarioEmpleado").value = "";
}

function eliminarEmpleado(index) {
    empleados.splice(index, 1);
    actualizarTabla();
}

function editarEmpleado(index) {
    let nuevoNombre = prompt("Nuevo nombre:", empleados[index].nombre);
    let nuevoCargo = prompt("Nuevo cargo:", empleados[index].cargo);
    let nuevoSalario = prompt("Nuevo salario:", empleados[index].salario);

    if (nuevoNombre && nuevoCargo && nuevoSalario) {
        empleados[index] = { nombre: nuevoNombre, cargo: nuevoCargo, salario: nuevoSalario };
        actualizarTabla();
    }
}
