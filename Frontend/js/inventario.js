function addProduct() {
    let name = document.getElementById('productName').value;
    let price = document.getElementById('productPrice').value;
    let quantity = document.getElementById('productQuantity').value;

    if (!name || price <= 0 || quantity <= 0) {
        alert('Ingrese datos válidos');
        return;
    }

    let table = document.getElementById('productTable');
    let row = table.insertRow();
    row.innerHTML = `<td>${name}</td><td>$${parseFloat(price).toFixed(2)}</td><td>${quantity}</td>
                     <td>
                         <button class="btn btn-warning btn-sm me-2" onclick="editProduct(this)">Editar</button>
                         <button class="btn btn-danger btn-sm" onclick="deleteProduct(this)">Eliminar</button>
                     </td>`;
    
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';
}

function editProduct(button) {
    let row = button.parentNode.parentNode;
    let name = prompt('Nuevo nombre:', row.cells[0].innerText);
    let price = prompt('Nuevo precio:', row.cells[1].innerText.replace('$', ''));
    let quantity = prompt('Nueva cantidad:', row.cells[2].innerText);

    if (name && price > 0 && quantity > 0) {
        row.cells[0].innerText = name;
        row.cells[1].innerText = `$${parseFloat(price).toFixed(2)}`;
        row.cells[2].innerText = quantity;
    } else {
        alert('Datos inválidos');
    }
}

function deleteProduct(button) {
    if (confirm('¿Está seguro de eliminar este producto?')) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}