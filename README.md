# CampusBite — Campus Cafeteria Ordering System

A responsive, five-page student project made with HTML, CSS and JavaScript.

## Run the website

1. Extract the ZIP file and open the `CampusBite` folder in VS Code.
2. Open `index.html` using the Live Server extension, or run `python -m http.server 8000` from the folder and open `http://localhost:8000` in a browser.
3. Browse the menu, add items to the cart, choose a pickup slot, and view the demo order receipt.

Use a local web server so the pages share the same browser storage. No API key, database, npm installation or login is required.

## Project files

- `index.html` — Home page and category shortcuts.
- `menu.html` — 50 food and beverage items, categories, search and dietary/availability filters.
- `cart.html` — Quantity controls, item removal, subtotal, demo tax and bill.
- `checkout.html` — Pickup slot selection and demo order confirmation.
- `orders.html` — Order history and receipts.
- `style.css` — Styling, responsive layouts and transitions.
- `app.js` — Commented menu data, shared navigation, cart, billing and order logic.
- `dish-0.webp` to `dish-49.webp` plus `hero-food.webp` — Local food images.

The 50 menu items include 10 each in Breakfast, Lunch, Dinner, Snacks and Beverages. Inventory, order history and the cart are simulated using browser localStorage. Tax, prices, pickup times and payment at the counter are illustrative; no real order or payment is transmitted.
