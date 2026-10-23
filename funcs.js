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