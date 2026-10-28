export function showMenu() {
    console.log("---- THE GAMER'S HUT ----");
    console.log("   1. Add product");
    console.log("   2. Delete product");
    console.log("   3. Checkout");
}


export function showCatalog(catalog) {
    for (let [productId, product] of catalog) {
        console.log(productId + ': ' + product.name + ' | ' + product.price + '€ | ' + product.stock)
    }
}


export function addProduct(catalog, shoppingCart, productId, quantity) {
    if (!catalog.has(productId)) {
        console.log("Product not found.");
        return false;
    }

    let product = catalog.get(productId);
    console.log(product)

    if (product.stock >= quantity) {
        if (!shoppingCart.has(productId)) {
            shoppingCart.set(productId, quantity);
        } else {
            shoppingCart.set(productId, (shoppingCart.get(productId) + quantity));
        }
        product.stock -= quantity;

        console.log(`The product "${product.name}", has an individual price of ${product.price}€. Adding ${quantity} units`);
    
    } else {
        console.log("No stock available.");
        return false;
    }
}


export function showCart(shoppingCart) {
    for (let [productId, quantity] of shoppingCart) {
        console.log(`${productId}: ${quantity}`)
    }
}


export function removeProduct(catalog, shoppingCart, productId, quantity) {
    if (!shoppingCart.has(productId)) {
        console.log(`No ${productId} found in cart.`);
        return false;
    } else if (quantity > shoppingCart.get(productId)) {
        console.log(`The product has less than ${quantity} units in the cart.`);
        return false;
    }

    shoppingCart.set(productId, (shoppingCart.get(productId) - quantity));
    catalog.get(productId).stock += units;
}


export function printTicket(shoppingCart, catalog, cupons) {
    console.log("==================================================");
    console.log("              Processing purchase...");
    console.log("==================================================");
    console.log("         PURCHASE INVOICE - CONFIRMED");
    console.log("==================================================");
    console.log("Order status: COMPLETE AND PAID"); 
    showCart(shoppingCart);
    console.log(`Total billed (simulated): ${calculateTotal(shoppingCart, catalog, cupons)}€`);
    console.log("==================================================");
}


export function calculateTotal(shoppingCart, catalog, cupons) {
    const IVA = 0.21;
    let total = 0;
    for (let [productId, quantity] of shoppingCart) {
        total += (catalog.get(productId).price * quantity);
    }

    let cupon = prompt('Enter your cupon: ')
        if (cupons.has(cupon)) {
            total *= cupons.get(cupon);
        }
    
    total *= 1 + IVA;
    return total;
}


