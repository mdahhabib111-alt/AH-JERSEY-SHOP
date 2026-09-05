const products = [
  { id: 1, name: 'Argentina Home Jersey', type: 'national', price: 650, color: 'linear-gradient(90deg,#bce6f6 0 33%,#fff 33% 66%,#bce6f6 66%)', number: 10 },
  { id: 2, name: 'Real Madrid Home Jersey', type: 'club', price: 650, color: 'linear-gradient(120deg,#fff 0 48%,#d9bc45 49% 52%,#fff 53%)', number: 7 },
  { id: 3, name: 'Barcelona Home Jersey', type: 'club', price: 650, color: 'linear-gradient(90deg,#9b1839 0 40%,#143f91 40% 60%,#9b1839 60%)', number: 9 },
  { id: 4, name: 'Brazil Home Jersey', type: 'national', price: 650, color: '#efd530', number: 10, dark: true },
  { id: 5, name: 'Portugal Home Jersey', type: 'national', price: 650, color: 'linear-gradient(90deg,#991f35 0 48%,#247b49 48%)', number: 7 },
  { id: 6, name: 'Manchester City Jersey', type: 'club', price: 650, color: '#77bde5', number: 9, dark: true },
  { id: 7, name: 'France Home Jersey', type: 'national', price: 650, color: '#15255a', number: 10 },
  { id: 8, name: 'Liverpool Home Jersey', type: 'club', price: 650, color: '#dd1734', number: 11 }
];

let cart = [];
const productsList = document.querySelector('#productsList');
const cartPanel = document.querySelector('#cartPanel');
const overlay = document.querySelector('#overlay');
const cartItems = document.querySelector('#cartItems');

function showProducts(filter = 'all') {
  const shown = filter === 'all' ? products : products.filter(p => p.type === filter);
  productsList.innerHTML = shown.map(p => `<article class="product"><div class="product-art"><div class="mini-jersey" style="background:${p.color};${p.dark ? 'color:#142141' : ''}">${p.number}</div></div><div class="product-info"><h3>${p.name}</h3><p>Premium quality • Size M–XXL</p><div class="price-row"><span class="price">৳${p.price}</span><button class="add" data-id="${p.id}">কার্টে যোগ করো</button></div></div></article>`).join('');
}

function updateCart() {
  document.querySelector('#cartCount').textContent = cart.length;
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  document.querySelector('#total').textContent = `৳${total}`;
  cartItems.innerHTML = cart.length ? cart.map((p, index) => `<div class="cart-item"><div class="thumb" style="background:${p.color}"></div><p><b>${p.name}</b><br />৳${p.price}</p><button class="remove" data-index="${index}" aria-label="Remove item">×</button></div>`).join('') : '<p class="empty">তোমার কার্ট এখন খালি।</p>';
}

function openCart() { cartPanel.classList.add('open'); overlay.classList.add('open'); }
function closeCart() { cartPanel.classList.remove('open'); overlay.classList.remove('open'); }

showProducts(); updateCart(); document.querySelector('#year').textContent = new Date().getFullYear();
productsList.addEventListener('click', event => { if (!event.target.matches('.add')) return; cart.push(products.find(p => p.id === Number(event.target.dataset.id))); updateCart(); openCart(); });
cartItems.addEventListener('click', event => { if (!event.target.matches('.remove')) return; cart.splice(Number(event.target.dataset.index), 1); updateCart(); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); showProducts(button.dataset.filter); }));
document.querySelector('#cartButton').addEventListener('click', openCart); document.querySelector('#closeCart').addEventListener('click', closeCart); overlay.addEventListener('click', closeCart);
document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('nav').classList.toggle('open'));
document.querySelector('#checkoutButton').addEventListener('click', () => { if (!cart.length) return alert('আগে অন্তত একটি জার্সি কার্টে যোগ করো।'); closeCart(); document.querySelector('#checkoutDialog').showModal(); });
document.querySelector('.dialog-close').addEventListener('click', () => document.querySelector('#checkoutDialog').close());
document.querySelector('#orderForm').addEventListener('submit', event => { event.preventDefault(); const name = document.querySelector('#customerName').value; const phone = document.querySelector('#customerPhone').value; const address = document.querySelector('#customerAddress').value; const payment = document.querySelector('input[name="payment"]:checked').value; const items = cart.map(p => `- ${p.name} (৳${p.price})`).join('%0A'); const total = cart.reduce((sum, p) => sum + p.price, 0); const message = `নতুন অর্ডার%0A%0Aনাম: ${name}%0Aফোন: ${phone}%0Aঠিকানা: ${address}%0Aপেমেন্ট: ${payment}%0A%0Aপণ্য:%0A${items}%0A%0Aমোট: ৳${total}`; window.open(`https://wa.me/8801605647055?text=${message}`, '_blank'); });
