function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

function estaEnElCarrito(id) {
    const carrito = cargarProductosCarrito();
    
    return carrito.some(item => item.id === id);
}

function agregarAlCarrito(id) {
    const carrito = cargarProductosCarrito();
    
    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarProductosCarrito(carrito);
    renderBotonCarrito();    
}

function eliminarProducto(id) {
    const carrito = cargarProductosCarrito();
    const productos = carrito.filter(i => i.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}

function buscarProducto(id) { 
    const productos = cargarProductosLS();

    return productos.find(i => i.id === id); 
}

function totalProductosCarrito() {
    const productos = cargarProductosCarrito();

    return productos.reduce((total, i) => total += i.cantidad, 0);
}

function totalPagarCarrito() {
    const productos = cargarProductosCarrito();

    return productos.reduce((total, i) => total += i.cantidad * i.precio, 0);
}

function renderBotonCarrito() {
    document.getElementById("carrito").innerText = totalProductosCarrito();
}

console.log(cargarProductosCarrito())
console.log(totalProductosCarrito())
console.log(totalPagarCarrito())
