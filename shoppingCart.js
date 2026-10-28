import { showMenu, addProduct, removeProduct, showCatalog, showCart, printTicket } from './funcs.js';


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


const cupons = new Map([['VERANO10', 0.9], ['PROMO20', 0.8]]);
let shoppingCart = new Map();


do {
    showMenu();
    var option = prompt('Choose an option: ');
    let productId, quantity;
    switch (option) {
        default:
            console.log('Invalid option.');
            break;

        case '1':
            showCatalog(catalog);
            productId = prompt('What product do you want to add?: ');
            quantity = parseInt(prompt('How many units do you want to buy?: '));
            addProduct(catalog, shoppingCart, productId, quantity);
            break;

        case '2':
            showCart(shoppingCart);
            productId = prompt('What product do you want to remove?: ');
            quantity = parseInt(prompt('How many units do you want to remove?: '));
            removeProduct(catalog, shoppingCart, productId, quantity);   
            break;         

        case '3':
            break;
    };
} while (option != '3');

printTicket(shoppingCart, catalog, cupons);