# Jersey Shop BD

Static starter e-commerce website for selling jerseys through WhatsApp orders.

## Before publishing

Open `index.html` and replace every `01XXXXXXXXX` with the shop phone number.

In `script.js`, replace `8801XXXXXXXXX` in the final line with the WhatsApp number in this format: `8801XXXXXXXXX` (no plus sign). For example, a Bangladeshi number `01712345678` becomes `8801712345678`.

The product names and prices can be changed in the `products` list at the top of `script.js`.

## Payments

This version records bKash, Nagad, or Cash on Delivery as the customer’s chosen method and sends the order to WhatsApp. Automatic bKash/Nagad payment requires an approved merchant account and payment-gateway integration.
