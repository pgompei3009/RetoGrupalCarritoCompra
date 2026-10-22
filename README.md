# 🛒 Shopping Cart Engine & Inventory Control

This repository contains the implementation for **Reto 1: Motor de cesta de compra y control de inventario**, a pair-programming challenge focused on managing an e-commerce shopping cart and inventory using JavaScript data structures (`Map`, `Set`, and `Array`).

## 🚀 Features

- **Catalog Management (`Map`):** Add new products and check available stock.
- **Coupon System (`Set`):** Validate discount codes, such as `VERANO10` and `PROMO20`.
- **Shopping Cart (`Array`):**
  - Add items to the cart, validating product existence and stock availability.
  - Remove items from the cart.
  - Calculate the total price, applying discounts and 21% VAT.
- **Checkout Process:** Process purchases, verify stock in real time, deduct inventory, and clear the cart upon successful checkout.

## 🛠️ Data Structures Used

| Data Structure | Purpose |
|---|---|
| `Map` | Stores the product catalog and enables fast lookups by product ID. |
| `Set` | Stores valid discount coupons, ensuring uniqueness and efficient validation. |
| `Array` | Maintains an ordered list of shopping cart items. |

## 📦 Custom Feature: Remove Product

As an addition to the original challenge requirements, a new function has been implemented:

```javascript
eliminarDelCarrito(carrito, idProducto)
```

This function searches the shopping cart array for the specified product ID and removes the entire line item using `Array.prototype.splice()`, leaving the remaining cart items intact.

## 💻 How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- Git installed to clone the repository.

### Installation and Execution

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-folder>
   ```

3. Run the script using Node.js:

   ```bash
   node cart.js
   ```

## 👥 Authors

- **Big Boss:** Peter Gomez Peinado
- **Developer 1:** Javier Sanchez Merino
- **Developer 2:** Asier Aguaza Jeronimo
- **Developer 3:** Juan Sanchez Casado

---

*Developed as part of the Reto 1 pair-programming challenge: Shopping Cart Engine & Inventory Control.*
