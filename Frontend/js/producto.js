let cart = [];
let total = 0;

// Función para agregar productos al carrito
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    updateCart();
}

// Función para actualizar el carrito en la interfaz
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove-button');
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
}

// Función para finalizar la compra
function checkout() {
    alert(`Gracias por su compra! Total: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}

// Función para filtrar productos en la búsqueda
function filterProducts() {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value.toLowerCase();
    const productGrid = document.getElementById('product-grid');
    const productCards = productGrid.getElementsByClassName('product-card');

    for (let i = 0; i < productCards.length; i++) {
        const productName = productCards[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
        if (productName.includes(searchText)) {
            productCards[i].style.display = '';
        } else {
            productCards[i].style.display = 'none';
        }
    }
}

function abrirDevoluciones() {
    document.getElementById("devoluciones-modal").style.display = "block";
}

function cerrarDevoluciones() {
    document.getElementById("devoluciones-modal").style.display = "none";
}

function enviarDevolucion() {
    let producto = document.getElementById("producto-dev").value;
    let motivo = document.getElementById("motivo-dev").value;

    if (producto && motivo) {
        alert("Solicitud enviada para el producto: " + producto);
        cerrarDevoluciones();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}
