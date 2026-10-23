export function showMenu() {
    console.log("---- THE GAMER'S HUT ----");
    console.log("   1. Add product");
    console.log("   2. Delete product");
    console.log("   3. Checkout");
}


export function calculateTotal(shoppingCart, catalog, cupons) {
    const IVA = 0.21;
    let total = 0;
    for ([idProduct, quantity] of shoppingCart) {
        total += (catalog.get(idProduct).price * quantity);
    };

    let cupon = prompt('Enter your cupon: ');
        if (cupons.includes(cupon)) {
            total *= cupons(cupon);
        }
    
    total *= 1 + IVA;
    return total;
}
const catalogo = new Map([
    ["PROD-01", {
        nombre: "Bloodborne PC",
        categoria: "Videogames",
        precio: 80,
        stock: 10
    }],
    ["PROD-02", {
        nombre: "knowledge",
        categoria: "Periféricos",
        precio: 35,
        stock: 5
    }],
    ["PROD-03", {
        nombre: "eyo",
        categoria: "Pantallas",
        precio: 220,
        stock: 3
    }]
]);

let carrito = new Map();


function anadirProducto(catalogo, carrito, idProducto, cantidad) {
    if (!catalogo.has(idProducto)) {
        console.log("Producto no encontrado. sry");
        return false;
    }

    let producto = catalogo.get(idProducto);
    console.log(producto)

    if (producto.stock >= 0) {
        carrito.set(idProducto, cantidad);
        producto.stock -= cantidad;

        console.log("Your products gng: ");
        console.log(`El producto es ${producto.nombre}, tiene un precio individual de ${producto.precio} €. Has cogido un total de ${cantidad}`);
        return [carrito, catalogo];
    
    } else {
        console.log("No stock gng.");
        return false;
    }
}


function consultarDisponibilidad(catalogo, idProducto) {
    if (catalogo.has(idProducto)) {
        return catalogo.get(idProducto).stock;

    }else{
        console.log("Da proda couldnt b found gng.");
        return null;
    }
}

anadirProducto(catalogo, carrito, "PROD-01", 6);
console.log(catalogo);
anadirProducto(catalogo, carrito, "PROD-01", 7);

consultarDisponibilidad(catalogo, "PROD-01");
