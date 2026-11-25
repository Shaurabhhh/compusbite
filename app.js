/* CampusBite | Menu, cart and pickup ordering logic.
   Sample inventory is stored locally so this student project runs without a backend. */
const menu = [
  { id: 1, name: 'Masala Dosa', category: 'Breakfast', price: 55, veg: true, stock: 12, emoji: '🥞', description: 'Crispy dosa with spiced potato, sambar and chutney.', color: '#f5dfba', position: '0% 0%' },
  { id: 2, name: 'Aloo Paratha', category: 'Breakfast', price: 45, veg: true, stock: 15, emoji: '🫓', description: 'Hot stuffed paratha served with fresh curd.', color: '#edddc5', position: '33.333% 0%' },
  { id: 3, name: 'Paneer Butter Masala', category: 'Lunch', price: 95, veg: true, stock: 8, emoji: '🍛', description: 'Creamy paneer curry with two soft naan.', color: '#ffe0b0', position: '66.667% 0%' },
  { id: 4, name: 'Chicken Biryani', category: 'Lunch', price: 110, veg: false, stock: 10, emoji: '🍗', description: 'Aromatic rice and tender chicken with cool raita.', color: '#ead6b1', position: '100% 0%' },
  { id: 5, name: 'Grilled Veg Sandwich', category: 'Snacks', price: 50, veg: true, stock: 14, emoji: '🥪', description: 'Toasted bread loaded with vegetables and cheese.', color: '#e5eac9', position: '0% 100%' },
  { id: 6, name: 'Punjabi Samosa', category: 'Snacks', price: 20, veg: true, stock: 0, emoji: '🥟', description: 'Two golden, crispy samosas with mint chutney.', color: '#f8d9b1', position: '33.333% 100%' },
  { id: 7, name: 'Cold Coffee', category: 'Beverages', price: 60, veg: true, stock: 15, emoji: '🧋', description: 'Chilled creamy coffee for a refreshing study break.', color: '#e5d1b7', position: '66.667% 100%' },
  { id: 8, name: 'Fresh Lime Soda', category: 'Beverages', price: 35, veg: true, stock: 18, emoji: '🍋', description: 'Fizzy lemon cooler with a touch of mint.', color: '#e1ead2', position: '100% 100%' },

  // Breakfast: 10 dishes, including the two original favourites.
  { id: 9, name: 'Poha', category: 'Breakfast', price: 35, veg: true, stock: 16, emoji: '🥣', description: 'Light flattened rice with peanuts, lemon and herbs.', color: '#f5e7c1' },
  { id: 10, name: 'Idli Sambar', category: 'Breakfast', price: 45, veg: true, stock: 12, emoji: '🍚', description: 'Soft steamed idlis with hot sambar and coconut chutney.', color: '#e9e4ce' },
  { id: 11, name: 'Chole Bhature', category: 'Breakfast', price: 65, veg: true, stock: 10, emoji: '🍛', description: 'Spiced chickpeas with two fluffy bhature.', color: '#f1d7b9' },
  { id: 12, name: 'Bread Omelette', category: 'Breakfast', price: 45, veg: false, stock: 15, emoji: '🍳', description: 'Fresh egg omelette with toasted bread and pepper.', color: '#f2e0b9' },
  { id: 13, name: 'Vegetable Upma', category: 'Breakfast', price: 40, veg: true, stock: 0, emoji: '🥣', description: 'Warm semolina cooked with vegetables and mustard seeds.', color: '#eddfc0' },
  { id: 14, name: 'Besan Chilla', category: 'Breakfast', price: 45, veg: true, stock: 11, emoji: '🥞', description: 'Two savoury gram flour pancakes with green chutney.', color: '#f1d2a0' },
  { id: 15, name: 'Vegetable Uttapam', category: 'Breakfast', price: 55, veg: true, stock: 9, emoji: '🥞', description: 'Thick South Indian pancake topped with vegetables.', color: '#efdfcb' },
  { id: 16, name: 'Egg Bhurji Toast', category: 'Breakfast', price: 60, veg: false, stock: 10, emoji: '🍳', description: 'Spiced scrambled eggs with two slices of toast.', color: '#f5d5ad' },

  // Lunch: affordable rice dishes, thalis and non-vegetarian meals.
  { id: 17, name: 'Rajma Chawal', category: 'Lunch', price: 65, veg: true, stock: 18, emoji: '🍛', description: 'Punjabi kidney bean curry with steamed rice.', color: '#ead6bb' },
  { id: 18, name: 'Chole Chawal', category: 'Lunch', price: 60, veg: true, stock: 14, emoji: '🍛', description: 'Tangy chickpea curry with fluffy basmati rice.', color: '#eed7ab' },
  { id: 19, name: 'Dal Makhani Rice', category: 'Lunch', price: 75, veg: true, stock: 10, emoji: '🍲', description: 'Creamy black lentils served with steaming rice.', color: '#e9d2b5' },
  { id: 20, name: 'Kadhi Chawal', category: 'Lunch', price: 60, veg: true, stock: 15, emoji: '🍛', description: 'Punjabi yoghurt curry with pakoras and rice.', color: '#f3e1ab' },
  { id: 21, name: 'Special Veg Thali', category: 'Lunch', price: 110, veg: true, stock: 7, emoji: '🍱', description: 'Dal, seasonal sabzi, roti, rice, salad and curd.', color: '#e3dfc1' },
  { id: 22, name: 'Chicken Curry Rice', category: 'Lunch', price: 105, veg: false, stock: 9, emoji: '🍗', description: 'Homestyle chicken curry served with basmati rice.', color: '#e9c9aa' },
  { id: 23, name: 'Veg Pulao and Raita', category: 'Lunch', price: 70, veg: true, stock: 12, emoji: '🍚', description: 'Fragrant vegetable rice with refreshing raita.', color: '#e5e5c6' },
  { id: 24, name: 'Vegetable Fried Rice', category: 'Lunch', price: 70, veg: true, stock: 0, emoji: '🍚', description: 'Wok-tossed rice with crunchy mixed vegetables.', color: '#e6d8b6' },

  // Dinner: ten filling evening meals with later pickup slots.
  { id: 25, name: 'Dal Tadka and Jeera Rice', category: 'Dinner', price: 65, veg: true, stock: 14, emoji: '🍲', description: 'Yellow lentils with a fragrant tempering and cumin rice.', color: '#f2e1ae' },
  { id: 26, name: 'Shahi Paneer and Roti', category: 'Dinner', price: 100, veg: true, stock: 9, emoji: '🍛', description: 'Rich creamy paneer curry with two fresh rotis.', color: '#efcfaa' },
  { id: 27, name: 'Butter Chicken and Naan', category: 'Dinner', price: 135, veg: false, stock: 8, emoji: '🍗', description: 'Creamy tomato chicken curry with soft naan.', color: '#ebc4a3' },
  { id: 28, name: 'Veg Handi and Roti', category: 'Dinner', price: 85, veg: true, stock: 11, emoji: '🥘', description: 'Mixed vegetables cooked in a rich masala with rotis.', color: '#e3d9b2' },
  { id: 29, name: 'Egg Curry Rice', category: 'Dinner', price: 80, veg: false, stock: 12, emoji: '🍳', description: 'Boiled eggs in a spiced gravy with steamed rice.', color: '#f1d3ad' },
  { id: 30, name: 'Palak Paneer and Roti', category: 'Dinner', price: 95, veg: true, stock: 13, emoji: '🍛', description: 'Paneer in spinach gravy with two warm rotis.', color: '#dce6c4' },
  { id: 31, name: 'Chicken Tikka Wrap', category: 'Dinner', price: 90, veg: false, stock: 10, emoji: '🌯', description: 'Grilled chicken, vegetables and mint sauce in a wrap.', color: '#ecdbbc' },
  { id: 32, name: 'Veg Hakka Noodles', category: 'Dinner', price: 75, veg: true, stock: 0, emoji: '🍜', description: 'Stir-fried noodles with vegetables and sauces.', color: '#ead6a3' },
  { id: 33, name: 'Matar Paneer Rice', category: 'Dinner', price: 90, veg: true, stock: 9, emoji: '🍛', description: 'Paneer and green peas in curry with basmati rice.', color: '#e7d4ae' },
  { id: 34, name: 'Moong Dal Khichdi', category: 'Dinner', price: 55, veg: true, stock: 15, emoji: '🥣', description: 'Comforting rice and lentils cooked with mild spices.', color: '#f1e3bd' },

  // Snacks: quick campus favourites for short breaks.
  { id: 35, name: 'Veg Burger', category: 'Snacks', price: 55, veg: true, stock: 20, emoji: '🍔', description: 'Crispy vegetable patty with lettuce and burger sauce.', color: '#eedbc2' },
  { id: 36, name: 'French Fries', category: 'Snacks', price: 50, veg: true, stock: 17, emoji: '🍟', description: 'Golden fries seasoned with salt and served hot.', color: '#f5dab2' },
  { id: 37, name: 'Steamed Veg Momos', category: 'Snacks', price: 60, veg: true, stock: 14, emoji: '🥟', description: 'Six vegetable dumplings with spicy dipping sauce.', color: '#e9e2d1' },
  { id: 38, name: 'Bread Pakora', category: 'Snacks', price: 30, veg: true, stock: 16, emoji: '🥪', description: 'Spiced potato sandwich fried in gram flour batter.', color: '#f1d4ad' },
  { id: 39, name: 'Veg Spring Rolls', category: 'Snacks', price: 55, veg: true, stock: 11, emoji: '🥟', description: 'Crispy rolls with a crunchy vegetable filling.', color: '#ead2a6' },
  { id: 40, name: 'Pav Bhaji', category: 'Snacks', price: 65, veg: true, stock: 11, emoji: '🍛', description: 'Buttery toasted pav with spiced mashed vegetables.', color: '#efcd9f' },
  { id: 41, name: 'Chicken Nuggets', category: 'Snacks', price: 80, veg: false, stock: 12, emoji: '🍗', description: 'Six crispy chicken nuggets with ketchup.', color: '#f0d0a4' },
  { id: 42, name: 'Cheese Pizza', category: 'Snacks', price: 95, veg: true, stock: 8, emoji: '🍕', description: 'Personal pizza topped with melted cheese and herbs.', color: '#eed3af' },

  // Beverages: ten hot and cold drinks for campus breaks.
  { id: 43, name: 'Masala Chai', category: 'Beverages', price: 15, veg: true, stock: 25, emoji: '☕', description: 'Fresh Indian tea brewed with milk and warming spices.', color: '#edcfb1' },
  { id: 44, name: 'Hot Coffee', category: 'Beverages', price: 30, veg: true, stock: 20, emoji: '☕', description: 'A comforting cup of hot, frothy milk coffee.', color: '#e8d0bc' },
  { id: 45, name: 'Mango Milkshake', category: 'Beverages', price: 65, veg: true, stock: 14, emoji: '🥭', description: 'Creamy chilled mango blended with fresh milk.', color: '#f5d7a1' },
  { id: 46, name: 'Chocolate Milkshake', category: 'Beverages', price: 70, veg: true, stock: 12, emoji: '🍫', description: 'A rich chilled chocolate shake with a creamy finish.', color: '#e6c9b0' },
  { id: 47, name: 'Sweet Lassi', category: 'Beverages', price: 40, veg: true, stock: 18, emoji: '🥛', description: 'Traditional Punjabi yoghurt drink, served sweet and cold.', color: '#eee7ce' },
  { id: 48, name: 'Masala Buttermilk', category: 'Beverages', price: 25, veg: true, stock: 16, emoji: '🥛', description: 'Light salted chaas with roasted cumin and mint.', color: '#e4ead1' },
  { id: 49, name: 'Fresh Orange Juice', category: 'Beverages', price: 55, veg: true, stock: 0, emoji: '🍊', description: 'Refreshing freshly squeezed orange juice.', color: '#f4d3a1' },
  { id: 50, name: 'Iced Lemon Tea', category: 'Beverages', price: 45, veg: true, stock: 15, emoji: '🍋', description: 'Chilled black tea with lemon, ice and a touch of sweetness.', color: '#e8d6ae' }
];
const categories = [['All items','✳'], ['Breakfast','🍳'], ['Lunch','🍛'], ['Dinner','🍽️'], ['Snacks','🥪'], ['Beverages','🥤']];
// Stable category order while preserving original item IDs for saved carts.
menu.sort((a, b) => categories.findIndex(([name]) => name === a.category) - categories.findIndex(([name]) => name === b.category));
const TAX_RATE = 0.05;
const $ = id => document.getElementById(id);
const currency = amount => '₹' + amount.toFixed(2);
const day = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());

// Read and write browser storage safely (private browsing may disable it).
function readLocal(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function saveLocal(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { /* Ordering remains usable in this session. */ }
}
const saved = readLocal('campusbite-inventory', {});
if (saved.day === day) menu.forEach(item => { if (Number.isInteger(saved.stock?.[item.id])) item.stock = Math.max(0,saved.stock[item.id]); });
const cart = new Map();
const savedCart = readLocal('campusbite-cart', {});
if(savedCart.day === day) menu.forEach(item => { const quantity = Math.min(item.stock, Number(savedCart.items?.[item.id]) || 0); if(quantity > 0 && Number.isInteger(quantity)) cart.set(item.id, quantity); });
let orderHistory = readLocal('campusbite-orders', []);
if(!Array.isArray(orderHistory)) orderHistory = [];
const page = document.body.dataset.page;
const requestedCategory = new URLSearchParams(location.search).get('category');
let activeCategory = categories.some(([name]) => name === requestedCategory) ? requestedCategory : 'All items';
let selectedSlot = '';
let orderPlaced = false;
let toastTimer;

// All five standalone HTML pages share the same header and footer.
function renderLayout() {
  const links = [['home','index.html','Home'], ['menu','menu.html','Menu'], ['cart','cart.html','Cart'], ['checkout','checkout.html','Checkout'], ['orders','orders.html','My orders']];
  $('siteHeader').innerHTML = `<div class="topbar"><a class="brand" href="index.html" aria-label="CampusBite home"><span class="brand-icon">✳</span><span>Campus<span class="orange">Bite.</span><small>CAMPUS CAFETERIA</small></span></a><nav aria-label="Main navigation">${links.map(([key,href,label]) => `<a href="${href}" class="nav-link ${key === page ? 'active' : ''}" ${key === page ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav><div class="header-right"><span class="open-status"><i></i> Cafeteria demo</span><a class="cart-trigger" href="cart.html" aria-label="View shopping cart">🛒 <span>Cart</span><b id="cartCount">0</b></a></div></div>`;
  $('siteFooter').innerHTML = `<a class="brand foot-brand" href="index.html"><span class="brand-icon">✳</span> CampusBite.</a><span>Made for campus life. <span class="orange">♥</span></span><span>Student project · Demo ordering system</span>`;
}

// Render the menu based on the active category, search and dietary filters.
function renderCategories() {
  if (!$('categories')) return;
  $('categories').innerHTML = categories.map(([name, icon]) => `<button class="category ${name === activeCategory ? 'active' : ''}" data-category="${name}" aria-pressed="${name === activeCategory}"><span aria-hidden="true">${icon}</span>${name}</button>`).join('');
}
function renderMenu() {
  if (!$('menuGrid')) return;
  const query = $('search').value.trim().toLowerCase();
  const visible = menu.filter(item => (activeCategory === 'All items' || item.category === activeCategory) && (!query || `${item.name} ${item.description}`.toLowerCase().includes(query)) && (!$('vegOnly').checked || item.veg) && (!$('availableOnly').checked || item.stock > 0));
  $('resultCount').textContent = `${visible.length} ${visible.length === 1 ? 'dish' : 'dishes'} available to browse`;
  $('menuGrid').innerHTML = visible.length ? visible.map(item => {
    const quantity = cart.get(item.id) || 0;
    const canAdd = item.stock > quantity;
    return `<article class="food-card">
      <div class="food-image has-photo" style="--food-bg:${item.color};--dish:url('dish-${item.id - 1}.webp')"><span class="food-emoji" aria-hidden="true">${item.emoji}</span><span class="stock-badge ${item.stock ? '' : 'sold'}">${item.stock ? '● In stock' : '● Sold out'}</span><span class="diet ${item.veg ? '' : 'nonveg'}" role="img" aria-label="${item.veg ? 'Vegetarian' : 'Non-vegetarian'}" title="${item.veg ? 'Vegetarian' : 'Non-vegetarian'}"></span></div>
      <div class="food-details"><div class="food-meta"><span>${item.category}</span> · <span>${item.veg ? 'Veg' : 'Non-veg'}</span></div><h3>${item.name}</h3><p>${item.description}</p><div class="food-bottom"><span class="price">₹${item.price}</span><button class="add-btn" data-add="${item.id}" ${canAdd ? '' : 'disabled'}>${!item.stock ? 'Sold out' : !canAdd ? 'Max added' : quantity ? `+ Add (${quantity})` : '+ Add'}</button></div></div></article>`;
  }).join('') : '<div class="empty-menu"><b>No dishes match</b>Try a different search or change the filters.</div>';
}

function calculateBill() {
  const subtotal = [...cart].reduce((total, [id, quantity]) => total + menu.find(item => item.id === id).price * quantity, 0);
  const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
  return { subtotal, tax, total: subtotal + tax };
}

// Keep the cart, badges and checkout totals in sync after every quantity change.
function renderCart() {
  const count = [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
  $('cartCount').textContent = count;
  if ($('cartBadge')) $('cartBadge').textContent = count;
  if ($('clearCart')) $('clearCart').disabled = !count;
  if ($('cartItems')) $('cartItems').innerHTML = !count ? '<div class="empty-state"><span>🛍️</span><h2>Your cart is empty</h2><p>Add something delicious from the menu.</p><a href="menu.html" class="primary">Explore menu</a></div>' : [...cart].map(([id, quantity]) => {
    const item = menu.find(food => food.id === id);
    return `<div class="cart-item"><img class="cart-thumb" src="dish-${id - 1}.webp" alt=""><div class="cart-item-info"><strong>${item.name}</strong><small>₹${item.price} each · ${item.veg ? 'Veg' : 'Non-veg'}</small><button class="text-button remove-item" data-remove="${id}">Remove</button></div><div class="stepper"><button data-change="-1" data-id="${id}" aria-label="Remove one ${item.name}">−</button><span>${quantity}</span><button data-change="1" data-id="${id}" ${quantity >= item.stock ? 'disabled' : ''} aria-label="Add one ${item.name}">+</button></div><strong class="line-price">${currency(item.price * quantity)}</strong></div>`;
  }).join('');
  if ($('basketPreview')) $('basketPreview').innerHTML = !count ? '<div class="cart-empty"><span>🛍️</span><strong>Your basket is empty</strong>Start with a campus favourite.</div>' : [...cart].map(([id, quantity]) => { const item = menu.find(food => food.id === id); return `<div class="preview-row"><img src="dish-${id - 1}.webp" alt=""><span>${item.name}<small>Qty ${quantity}</small></span><strong>₹${item.price * quantity}</strong></div>`; }).join('');
  const bill = calculateBill();
  if ($('subtotal')) $('subtotal').textContent = currency(bill.subtotal);
  if ($('tax')) $('tax').textContent = currency(bill.tax);
  if ($('total')) $('total').textContent = currency(bill.total);
  if ($('proceedCheckout')) $('proceedCheckout').disabled = !count;
  if ($('checkout')) $('checkout').disabled = !count || !selectedSlot;
  if ($('checkoutContent')) { $('checkoutContent').hidden = !count || orderPlaced; $('checkoutEmpty').hidden = count > 0 || orderPlaced; }
  saveLocal('campusbite-cart', {day,items:Object.fromEntries(cart)});
}

function notify(message) {
  if (!$('toast')) return;
  $('toast').textContent = message;
  $('toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 2300);
}
function changeQuantity(id, difference) {
  const item = menu.find(food => food.id === id);
  if (!item) return;
  const next = (cart.get(id) || 0) + difference;
  if (next > item.stock) { notify('No more units available for this item.'); return; }
  if (next <= 0) cart.delete(id); else cart.set(id, next);
  renderCart(); renderMenu();
  if (difference > 0) notify(`${item.name} added to your order`);
}

// Campus break slots are deliberately simulated for the frontend demonstration.
const slots = ['08:30 AM – 09:00 AM', '10:00 AM – 10:30 AM', '11:30 AM – 12:00 PM', '12:30 PM – 01:00 PM', '01:00 PM – 01:30 PM', '02:00 PM – 02:30 PM', '03:30 PM – 04:00 PM', '04:30 PM – 05:00 PM', '05:30 PM – 06:00 PM', '06:30 PM – 07:00 PM', '07:30 PM – 08:00 PM', '08:30 PM – 09:00 PM'];
function renderSlots() {
  if (!$('pickupSlots')) return;
  $('pickupSlots').innerHTML = slots.map((slot, index) => `<button class="slot-button ${selectedSlot === slot ? 'selected' : ''}" data-slot="${index}" aria-pressed="${selectedSlot === slot}">${slot}</button>`).join('');
}

// Save demo orders and reduce available inventory immediately after checkout.
function placeOrder() {
  if (!cart.size || !selectedSlot || orderPlaced) return;
  const items = [...cart].map(([id, quantity]) => { const item = menu.find(food => food.id === id); return {name:item.name, quantity, price:item.price}; });
  const bill = calculateBill();
  const order = {id: 'CB-' + Date.now().toString(36).slice(-6).toUpperCase(), slot: selectedSlot, date: day, items, ...bill};
  for (const [id, quantity] of cart) menu.find(food => food.id === id).stock -= quantity;
  orderHistory.unshift(order);
  saveLocal('campusbite-orders', orderHistory);
  saveLocal('campusbite-inventory', {day, stock:Object.fromEntries(menu.map(item => [item.id,item.stock]))});
  $('receipt').innerHTML = receiptMarkup(order);
  cart.clear(); selectedSlot = ''; orderPlaced = true;
  renderCart(); $('confirmation').hidden = false; $('confirmation').scrollIntoView({behavior:'smooth',block:'center'});
}
// Escape text from saved records before displaying it in the receipt.
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function receiptMarkup(order) {
  return `<div><strong>Order ${escapeHtml(order.id)}</strong><span class="history-status">Confirmed · Demo</span></div><div><span>Pickup</span><strong>${escapeHtml(order.slot)}</strong></div><ul>${order.items.map(item => `<li>${escapeHtml(item.quantity)} × ${escapeHtml(item.name)}</li>`).join('')}</ul><div><span>Total · Pay at counter</span><strong>${currency(Number(order.total))}</strong></div>`;
}
function renderHistory() {
  if (!$('historyList')) return;
  $('orderStat').textContent = orderHistory.length;
  $('spendStat').textContent = currency(orderHistory.reduce((sum, order) => sum + Number(order.total), 0));
  $('historyList').innerHTML = orderHistory.length ? orderHistory.map(order => `<article class="history-entry">${receiptMarkup(order)}<small>${escapeHtml(order.date)}</small></article>`).join('') : '<div class="empty-state"><span>🧾</span><h2>No orders yet</h2><p>Your completed demo orders will appear here.</p><a href="menu.html" class="primary">Explore menu</a></div>';
}

// Bind only the controls present on this page. All pages use shared local storage.
renderLayout();
if ($('today')) $('today').textContent = new Intl.DateTimeFormat('en-IN', {weekday:'short',day:'numeric',month:'short',timeZone:'Asia/Kolkata'}).format(new Date());
$('categories')?.addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (button) { activeCategory = button.dataset.category; renderCategories(); renderMenu(); } });
$('menuGrid')?.addEventListener('click', event => { const button = event.target.closest('[data-add]'); if (button) changeQuantity(Number(button.dataset.add), 1); });
$('cartItems')?.addEventListener('click', event => { const button = event.target.closest('[data-change]'); const remove = event.target.closest('[data-remove]'); if (button) changeQuantity(Number(button.dataset.id), Number(button.dataset.change)); if (remove) { cart.delete(Number(remove.dataset.remove)); renderCart(); notify('Item removed from cart.'); } });
['search','vegOnly','availableOnly'].forEach(id => $(id)?.addEventListener(id === 'search' ? 'input' : 'change', renderMenu));
$('clearCart')?.addEventListener('click', () => { cart.clear(); renderCart(); notify('Your cart is cleared.'); });
$('proceedCheckout')?.addEventListener('click', () => { if (cart.size) location.href = 'checkout.html'; });
$('pickupSlots')?.addEventListener('click', event => { const button = event.target.closest('[data-slot]'); if (!button) return; selectedSlot = slots[Number(button.dataset.slot)]; renderSlots(); $('pickupHint').textContent = 'Collect your order during ' + selectedSlot; renderCart(); });
$('checkout')?.addEventListener('click', placeOrder);
renderCategories(); renderMenu(); renderCart(); renderSlots(); renderHistory();
// Back/forward navigation should always reload the latest cart from storage.
window.addEventListener('pageshow', event => { if (event.persisted) location.reload(); });
