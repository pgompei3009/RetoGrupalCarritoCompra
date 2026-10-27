function printTicket(catalogo, carrito, cupon) {
    console.log("==================================================");
    console.log("Procesando compra y actualizando stock...");
    console.log("==================================================");
    console.log("         FACTURA DE COMPRA - CONFIRMADA");
    console.log("==================================================");
    console.log("Estado del pedido: COMPLETO Y PAGADO"); 
    console.log(`Total cobrado (simulado): ${calcularTotalCarrito(catalogo, carrito, cupon)})`)
    console.log("NUEVO STOCK EN CATÁLOGO:");
    for (let [id, producto] of catalogo) {
        console.log(`- ${id} (${producto.nombre}): ${producto.stock} unidades`);
    }
    console.log("==================================================");
}