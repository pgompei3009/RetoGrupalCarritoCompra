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




export function showCart(shoppingCart) {
    for (let [productId, quantity] of shoppingCart) {
        console.log(`${productId}: ${quantity}`)
    }
}


export function addProduct(catalog, shoppingCart, productId, quantity) {
    if (!catalog.has(productId)) {
        console.log("Product not found. sorry");
        return false;
    }

    let product = catalog.get(productId);
    console.log(product)

    if (product.stock >= quantity) {
        const currentCartQty = shoppingCart.get(productId) || 0;
        shoppingCart.set(productId, currentCartQty + quantity);
        product.stock -= quantity;

        console.log("Your products gng: ");
        console.log(`The product "${product.name}", has an individual price of ${product.price}€. Adding ${quantity} units`);
        return [shoppingCart, catalog];
    
    } else {
        console.log("No stock gng.");
        return false;
    }
}

export function removeProduct(catalog, shoppingCart, productId, quantity){
    if (!catalog.has(productId)) {
        console.log("Product not found. sorry");
        return false;
    }
    if (!shoppingCart.has(productId)) {
        console.log("Product not in cart. sorry");
        return false;
    }
    let product = catalog.get(productId);
    let cartQuantity = shoppingCart.get(productId);

    if (cartQuantity >= quantity) {
        const remainingQuantity = cartQuantity - quantity;


        if (remainingQuantity === 0) {
            shoppingCart.delete(productId);
        } else {
            shoppingCart.set(productId, remainingQuantity);
        }

        product.stock += quantity;
        console.log(`Removed ${quantity} units of "${product.name}" from the cart`);
        return [shoppingCart, catalog];
    } else {
        console.log("Not enough quantity in cart. sorry");
        return false;
    }
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
    };

    let cupon = prompt('Enter your cupon: ');
        if (cupons.has(cupon)) {
            total *= cupons.get(cupon);
        };
    
    total *= 1 + IVA;
    return total;
}


