import { showMenu, calculateTotal, addProduct, showCatalog } from './funcs.js';


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
    switch (option) {
        default:
            console.log('Invalid option.');
            break;

        case '1':
            showCatalog(catalog);
            let productId = prompt('What product do you want to add?: ');
            let quantity = prompt('How many units do you want to buy?: ')
            addProduct(catalog, shoppingCart, productId, quantity);
            break;

        case '2':
            eliminarProducto(shoppingCart);   
            break;         

        case '3':
            break;
    }
} while (option != '3');

let total = calculateTotal(shoppingCart, catalog, cupons);
console.log('El total de su compra es de ' + total + '€. Disfruta.');