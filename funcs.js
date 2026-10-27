export function printTicket(catalog, shoppingCart, cupon) {
    console.log("==================================================");
    console.log("Processing purchase and updating stock...");
    console.log("==================================================");
    console.log("         PURCHASE INVOICE - CONFIRMED");
    console.log("==================================================");
    console.log("Order status: COMPLETE AND PAID"); 
    console.log(`Total billed (simulated): ${calcularTotalshoppingCart(catalog, shoppingCart, cupon)})`)
    console.log("NEW STOCK IN CATALOG:");
    for (let [productId, product] of catalog) {
        console.log(`- ${productId} (${product.name}): ${product.stock} units`);
    }
    console.log("==================================================");
}

export function showMenu() {
    console.log("---- THE GAMER'S HUT ----");
    console.log("   1. Add product");
    console.log("   2. Delete product");
    console.log("   3. Checkout");
}


export function calculateTotal(shoppingCart, catalog, cupons) {
    const IVA = 0.21;
    let total = 0;
    for (let [productId, quantity] of shoppingCart) {
        total += (catalog.get(productId).price * quantity);
    };

    let cupon = prompt('Enter your cupon: ');
        if (cupons.has(cupon)) {
            total *= cupons.get(cupon);
        }
    
    total *= 1 + IVA;
    return total;
}


export function showCatalog(catalog) {
    for (let [productId, product] of catalog) {
        console.log(productId + ': ' + product.name + ' | ' + product.price + '€ | ' + product.stock)
    }
}


export function addProduct(catalog, shoppingCart, productId, quantity) {
    if (!catalog.has(productId)) {
        console.log("Product not found. sry");
        return false;
    }

    let product = catalog.get(productId);
    console.log(product)

    if (product.stock >= quantity) {
        shoppingCart.set(productId, quantity);
        product.stock -= quantity;

        console.log("Your products gng: ");
        console.log(`De product "${product.name}", has an individual price of ${product.price}€. Adding ${quantity} units`);
        return [shoppingCart, catalog];
    
    } else {
        console.log("No stock gng.");
        return false;
    }
}