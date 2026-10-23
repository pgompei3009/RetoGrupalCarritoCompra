import { showMenu } from './funcs.js';
import { calculateTotal } from './funcs.js';
import { addProduct } from './funcs.js';
import { verifyStock } from './funcs.js';


const catalog = new Map([
    ["PROD-01", {
        name: "Bloodborne PC",
        category: "Videogames",
        price: 80,
        stock: 10
    }],
    ["PROD-02", {
        name: "Elite Ball Knoledge",
        category: "Peripheral",
        price: 35,
        stock: 5
    }],
    ["PROD-03", {
        name: "AYO-Caught In 4K",
        category: "Monitor",
        price: 220,
        stock: 3
    }]
]);

let shoppingCart = new Map();


while (true) {
    showMenu();
    option = prompt('Choose an option: ');
    switch (option) {
        case 1:
            productId = prompt('What product do you want to add?: ')
            addProduct(catalog, shoppingCart, productId, quantity)
        case 2:

        case 3:
            
    }
}