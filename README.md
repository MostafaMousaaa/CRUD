# CRUD Application (Vanilla JS)

A simple **CRUD (Create / Read / Update / Delete)** products app built with **HTML + Bootstrap + Vanilla JavaScript**.

## Features

- Create products (name, category, price, description)
- Display products as Bootstrap cards
- Update an existing product
- Delete a product
- Persist products using `localStorage` (data stays after refresh in the same browser)

## Project Structure

- `index.html` — UI (inputs + buttons + products container)
- `js/main.js` — CRUD logic + localStorage + basic regex validation
- `css/style.css` — simple black/blue theme
- `css/bootstrap.min.css`, `js/bootstrap.bundle.min.js` — Bootstrap assets

## How to Run

1. Open `index.html` in your browser.
2. Add a product using the inputs, then click **Add Product**.
3. Use **Update** / **Delete** buttons on each product card.

> No build tools or servers required.

## Data Persistence (localStorage)

Products are stored in the browser under the key:

- `products`

To reset the app data:

- Open DevTools → Application/Storage → Local Storage, delete `products`, then refresh.

## Validation Notes

- The inputs for **Product Name**, **Category**, and **Price** call:
  - `validateProductName()`
  - `validateProductCategory()`
  - `validateProductPrice()`
- Current behavior: validation **logs to the console** (it does not yet block submission or show UI error messages).

## Image Notes

- The app currently uses a **fixed image path** for all products:
  - `images/Palastine_Background.jpg`
- The file input (`Product Image URL`) is present in the UI but is **not used** in the JS logic yet.

If the image file does not exist, cards will show a broken image icon.

## Tech Used

- HTML
- CSS
- Bootstrap
- JavaScript (DOM + localStorage)
