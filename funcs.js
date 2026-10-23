export function showMenu() {
    console.log("---- THE GAMER'S HUT ----");
    console.log("   1. Add product");
    console.log("   2. Delete product");
    console.log("   3. Checkout");
}


export function calculateTotal(shoppingCart, catalog, cupons) {
    const IVA = 0.21;
    let total = 0;
    for ([productId, quantity] of shoppingCart) {
        total += (catalog.get(productId).price * quantity);
    };

    let cupon = prompt('Enter your cupon: ');
        if (cupons.includes(cupon)) {
            total *= cupons(cupon);
        }
    
    total *= 1 + IVA;
    return total;
}


export function showCatalog(catalog) {
    for ([productId, product] of catalog) {
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

    if (product.stock >= 0) {
        shoppingCart.set(productId, quantity);
        product.stock -= quantity;

        console.log("Your products gng: ");
        console.log(`De product "${product.nombre}", has an individual price of ${product.precio}€. Adding ${cantidad} units`);
        return [shoppingCart, catalog];
    
    } else {
        console.log("No stock gng.");
        return false;
    }
}


export function verifyStock(catalog, ProductId) {
    if (catalog.has(ProductId)) {
        return catalog.get(ProductId).stock;

    }else{
        console.log("Da proda couldnt b found gng.");
        return null;
    }
}
