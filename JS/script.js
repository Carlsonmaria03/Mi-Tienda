// Inicializamos el carrito como un arreglo vacío
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, descripcion) {
    // Creamos un objeto de producto
    const producto = {
        nombre: nombre,
        descripcion: descripcion
    };
    // Agregamos el producto al carrito
    carrito.push(producto);
    // Actualizamos la vista del carrito
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = ''; // Limpiamos el contenido anterior

    // Iteramos sobre el carrito y creamos elementos para cada producto
    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-carrito');
        productoDiv.innerHTML = `<strong>${producto.nombre}</strong>: ${producto.descripcion}`;
        carritoContainer.appendChild(productoDiv);
    });
}

// Función para finalizar la compra
document.addEventListener('DOMContentLoaded', () => {
    const finalizarCompraBtn = document.getElementById('finalizar-compra');
    finalizarCompraBtn.addEventListener('click', function() {
        if (carrito.length === 0) {
            alert('El carrito está vacío.');
        } else {
            alert('Gracias por tu compra. Tu pedido ha sido procesado.');
            // Reiniciamos el carrito
            carrito = [];
            mostrarCarrito();
        }
    });
});
