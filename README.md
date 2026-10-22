Shopping Cart Engine & Inventory Control
This repository contains the implementation for Reto 1: Motor de cesta de compra y control de inventario, a pair-programming challenge focused on managing an e-commerce shopping cart and inventory using JavaScript data structures (`Map`, `Set`, and `Array`).
🚀 Features
Catalog Management (`Map`): Add new products and check available stock.
Coupon System (`Set`): Validate discount codes (e.g., `VERANO10`, `PROMO20`).
Shopping Cart (`Array`):
Add items to the cart (validates existence and stock).
Custom Feature: Remove items from the cart.
Calculate the total price, applying discounts and a 21% VAT.
Checkout Process: Processes the purchase, verifies stock in real-time, deducts inventory, and clears the cart upon success.
🛠️ Data Structures Used
`Map`: Used for the product catalog to allow fast, key-based (Product ID) lookups.
`Set`: Used for storing valid discount coupons to ensure uniqueness and fast validation.
`Array`: Used for the shopping cart to maintain an ordered list of line items.
📦 New Custom Feature: Remove Product
As an addition to the original challenge requirements, a new function has been added:
`eliminarDelCarrito(carrito, idProducto)`
This function searches the cart array for the specified product ID and removes the entire line item using `Array.prototype.splice()`, leaving the rest of the cart intact.
💻 How to Run
Clone this repository.
Open your terminal and navigate to the project folder.
Run the script using Node.js:
```bash
   node cart.js
   ```
👥 Authors
Big boss: Peter Gomez Peinado
Developer 1: Javier Sanchez Merino
Developer 2: Asier Aguaza Jeronimo
Developer 3: Juan Sanchez Casado