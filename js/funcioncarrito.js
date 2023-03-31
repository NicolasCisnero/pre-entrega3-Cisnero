function renderProductosCarrito() {
    const productos = cargarProductosCarrito();
    let salida = "";

    if (totalProductosCarrito() > 0) {
        salida += `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button class="btn btn-dark lg" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
        <tr>`;

        for (producto of productos) {
            salida += `<tr>
            <td><img src="${"img/" + producto.imagen}" alt="${producto.nombre}" width="80" /></td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad} X $${producto.precio}</td>
            <td>$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button class="btn btn-dark lg" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><img src="img/papelera.jpg" alt="Eliminar Producto" width="30" /></button></td>
            </tr>`;
        }

        salida += `<tr>
        <td colspan="3">Total a Pagar</td>
        <td>$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
        salida += `</table>`;
    } else {
        salida = alert("te esperamos en el inicio para que compres lo que quieras!!!")
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();