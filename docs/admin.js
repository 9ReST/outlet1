const ADMIN_EMAIL = 'owner@isgroupoutlet.demo';
const ADMIN_PASSWORD = 'outlet2026';
const PRODUCT_STORAGE_KEY = 'isgroup-demo-products';
const STAFF_STORAGE_KEY = 'isgroup-demo-staff';
const ORDER_STORAGE_KEY = 'isgroup-demo-orders';
const CART_STORAGE_KEY = 'isgroup-demo-cart';
const CATEGORY_STORAGE_KEY = 'isgroup-demo-categories';
const ORDER_STATUS_STORAGE_KEY = 'isgroup-demo-order-statuses';
const SKU_COUNTER_STORAGE_KEY = 'isgroup-demo-sku-counter';

const defaultCategories = [
  { id: 'tv', name: { es: 'Televisores', en: 'TVs', ru: 'Телевизоры' } },
  { id: 'coffee', name: { es: 'Café', en: 'Coffee', ru: 'Кофе' } },
  { id: 'cleaning', name: { es: 'Limpieza', en: 'Cleaning', ru: 'Уборка' } },
  { id: 'kitchen', name: { es: 'Cocina', en: 'Kitchen', ru: 'Кухня' } },
  { id: 'large', name: { es: 'Gran electrodoméstico', en: 'Large appliances', ru: 'Крупная техника' } }
];

const defaultProducts = [
  { id: 'samsung-qled-55', sku: 'IS-TV-001', brand: 'Samsung', category: 'tv', price: 449.5, oldPrice: 899, stock: 2, status: 'published', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=82', title: { es: 'Televisor Samsung QLED 55”', en: 'Samsung QLED 55” TV', ru: 'Телевизор Samsung QLED 55”' }, description: { es: 'Televisor 4K de exposición, revisado y listo para disfrutar.', en: 'Inspected 4K display model, ready to enjoy.', ru: 'Проверенный выставочный телевизор 4K, готовый к использованию.' } },
  { id: 'delonghi-magnifica', sku: 'IS-CF-002', brand: 'De’Longhi', category: 'coffee', price: 249.5, oldPrice: 499, stock: 3, status: 'published', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=82', title: { es: 'Cafetera Magnifica Start', en: 'Magnifica Start coffee machine', ru: 'Кофемашина Magnifica Start' }, description: { es: 'Café recién molido con controles sencillos y vaporizador manual.', en: 'Freshly ground coffee with simple controls and a manual frother.', ru: 'Свежемолотый кофе, простое управление и ручной капучинатор.' } },
  { id: 'bosch-unlimited-7', sku: 'IS-CL-003', brand: 'Bosch', category: 'cleaning', price: 224.5, oldPrice: 449, stock: 4, status: 'published', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=82', title: { es: 'Aspirador Bosch Unlimited 7', en: 'Bosch Unlimited 7 vacuum', ru: 'Пылесос Bosch Unlimited 7' }, description: { es: 'Aspirador sin cable, flexible y potente para la limpieza diaria.', en: 'Flexible and powerful cordless vacuum for daily cleaning.', ru: 'Гибкий и мощный беспроводной пылесос для ежедневной уборки.' } },
  { id: 'cecotec-dual', sku: 'IS-KT-004', brand: 'Cecotec', category: 'kitchen', price: 74.5, oldPrice: 149, stock: 5, status: 'published', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=82', title: { es: 'Freidora de aire Cecofry Dual', en: 'Cecofry Dual air fryer', ru: 'Аэрогриль Cecofry Dual' }, description: { es: 'Dos cubetas independientes para preparar platos distintos a la vez.', en: 'Two independent baskets to cook different dishes at once.', ru: 'Две независимые чаши для одновременного приготовления разных блюд.' } },
  { id: 'lg-washer', sku: 'IS-LA-005', brand: 'LG', category: 'large', price: 299.5, oldPrice: 599, stock: 2, status: 'published', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=82', title: { es: 'Lavadora LG 8 kg AI DD', en: 'LG 8 kg AI DD washer', ru: 'Стиральная машина LG 8 кг AI DD' }, description: { es: 'Lavado inteligente de bajo consumo con capacidad para toda la familia.', en: 'Energy-efficient smart washing with room for the whole family.', ru: 'Экономичная умная стирка и загрузка для всей семьи.' } },
  { id: 'philips-lattego', sku: 'IS-CF-006', brand: 'Philips', category: 'coffee', price: 274.5, oldPrice: 549, stock: 1, status: 'draft', image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=900&q=82', title: { es: 'Philips LatteGo Serie 3200', en: 'Philips LatteGo Series 3200', ru: 'Кофемашина Philips LatteGo 3200' }, description: { es: 'Café y espuma de leche suave con un sistema fácil de limpiar.', en: 'Coffee and silky milk foam with an easy-clean system.', ru: 'Кофе и нежная молочная пенка, система легко очищается.' } }
];

const demoOrders = [
  { id: 'IS-2408', date: '03.08.2026', customer: 'María González', contact: '+34 611 234 001', product: 'Samsung QLED 55”', total: 449.5, delivery: 'Самовывоз', status: 'processing' },
  { id: 'IS-2407', date: '02.08.2026', customer: 'Алексей Иванов', contact: '+34 622 345 002', product: 'Bosch Unlimited 7', total: 224.5, delivery: 'Доставка по Испании', status: 'shipped' },
  { id: 'IS-2406', date: '01.08.2026', customer: 'Carlos Pérez', contact: '+34 633 456 003', product: 'Cecofry Dual', total: 74.5, delivery: 'Самовывоз', status: 'ready' },
  { id: 'IS-2405', date: '31.07.2026', customer: 'Laura Martin', contact: '+33 644 567 004', product: 'Philips LatteGo 3200', total: 274.5, delivery: 'Доставка по ЕС', status: 'processing' },
  { id: 'IS-2404', date: '30.07.2026', customer: 'Juan Torres', contact: '+34 655 678 005', product: 'Lavadora LG 8 kg', total: 299.5, delivery: 'Местная доставка', status: 'shipped' }
];

const defaultStaff = [
  { id: 'owner', name: 'Alisher Niyazov', email: 'owner@isgroupoutlet.demo', role: 'owner', status: 'active' },
  { id: 'staff-1', name: 'Marina López', email: 'catalogo@isgroupoutlet.demo', role: 'manager', status: 'active' },
  { id: 'staff-2', name: 'Pablo Ruiz', email: 'pedidos@isgroupoutlet.demo', role: 'pickup', status: 'active' }
];

const roleLabels = { owner: 'Владелец', manager: 'Менеджер каталога', orders: 'Менеджер заказов', pickup: 'Выдача заказов' };
const rolePermissions = { owner: 'Полный доступ', manager: 'Товары и остатки', orders: 'Заказы без финансов', pickup: 'Подготовка и выдача' };
const orderStatusLabels = { new: 'Новая заявка', processing: 'Готовится', ready: 'Готов к выдаче', shipped: 'Передан в доставку', completed: 'Завершён' };
const deliveryLabels = { pickup: 'Самовывоз в Новельде', spain: 'Доставка по Испании', local: 'Местная доставка', eu: 'Доставка по ЕС' };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const clone = (value) => JSON.parse(JSON.stringify(value));
const money = (value) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'EUR' }).format(Number(value) || 0);
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
const initials = (name) => String(name).split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();

function safeImageUrl(value) {
  const url = String(value || '').trim();
  return /^https:\/\//i.test(url) || /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(url) ? url : '';
}

function loadList(key, fallback) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    return Array.isArray(stored) ? stored : clone(fallback);
  } catch {
    return clone(fallback);
  }
}

function loadObject(key, fallback = {}) {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    return stored && typeof stored === 'object' && !Array.isArray(stored) ? stored : clone(fallback);
  } catch {
    return clone(fallback);
  }
}

let products = loadList(PRODUCT_STORAGE_KEY, defaultProducts).map((product) => ({ ...product, status: product.status || 'published' }));
let staff = loadList(STAFF_STORAGE_KEY, defaultStaff);
let storefrontOrders = loadList(ORDER_STORAGE_KEY, []);
let categories = loadList(CATEGORY_STORAGE_KEY, defaultCategories);
let orderStatusOverrides = loadObject(ORDER_STATUS_STORAGE_KEY);
let toastTimer;

function getAllOrders() {
  const recentStorefrontOrders = [...storefrontOrders].sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  return [...recentStorefrontOrders, ...demoOrders].map((order) => ({ ...order, status: orderStatusOverrides[order.id] || order.status }));
}

function categoryLabel(categoryId, language = 'ru') {
  const category = categories.find((item) => item.id === categoryId);
  return category?.name?.[language] || category?.name?.es || categoryId;
}

function generateSku() {
  const storedCounter = Number(localStorage.getItem(SKU_COUNTER_STORAGE_KEY) || 0);
  const productCounter = products.reduce((max, product) => {
    const match = String(product.sku || '').match(/(\d+)$/);
    return Math.max(max, Number(match?.[1] || 0));
  }, 0);
  const next = Math.max(storedCounter, productCounter) + 1;
  localStorage.setItem(SKU_COUNTER_STORAGE_KEY, String(next));
  return `IS-${String(next).padStart(4, '0')}`;
}

function orderDelivery(order) {
  return deliveryLabels[order.deliveryCode] || order.delivery || 'Не указано';
}

function paymentState(order) {
  return order.paymentStatus || 'confirmed';
}

function paymentChip(order) {
  const state = paymentState(order);
  const label = state === 'confirmed' ? 'Подтверждена' : 'Не списывалась · демо';
  return `<span class="payment-chip ${state}">${label}</span>`;
}

function saveProducts(message = 'Изменения товара сохранены') {
  try {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
    renderAll();
    showToast(message);
  } catch {
    showToast('Изображение слишком большое для демо-хранилища');
  }
}

function saveStaff(message = 'Данные сотрудника сохранены') {
  localStorage.setItem(STAFF_STORAGE_KEY, JSON.stringify(staff));
  renderAll();
  showToast(message);
}

function saveCategories(message = 'Категория сохранена') {
  localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(categories));
  renderAll();
  showToast(message);
}

function saveOrderStatuses(message = 'Статус заказа обновлён') {
  localStorage.setItem(ORDER_STATUS_STORAGE_KEY, JSON.stringify(orderStatusOverrides));
  renderAll();
  showToast(message);
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#adminToast').textContent = message;
  $('#adminToast').classList.add('show');
  toastTimer = setTimeout(() => $('#adminToast').classList.remove('show'), 2400);
}

function productImage(product, className) {
  const url = safeImageUrl(product.image);
  return `<div class="${className}"><span>ФОТО</span>${url ? `<img src="${escapeHtml(url)}" alt="" onerror="this.remove()">` : ''}</div>`;
}

function showAdmin() {
  $('#adminLogin').hidden = true;
  $('#adminApp').hidden = false;
  renderAll();
}

function showLogin() {
  $('#adminApp').hidden = true;
  $('#adminLogin').hidden = false;
}

const sectionMeta = {
  overview: ['ОБЗОР МАГАЗИНА', 'Добрый вечер, владелец'],
  products: ['КАТАЛОГ И ОСТАТКИ', 'Управление товарами'],
  categories: ['СТРУКТУРА КАТАЛОГА', 'Категории товаров'],
  orders: ['ЗАКАЗЫ И ВЫДАЧА', 'Контроль заказов'],
  team: ['ДОСТУП И РОЛИ', 'Сотрудники']
};

function showSection(name) {
  $$('.admin-section').forEach((section) => { section.hidden = section.id !== `section-${name}`; section.classList.toggle('active', section.id === `section-${name}`); });
  $$('[data-admin-section]').forEach((button) => button.classList.toggle('active', button.dataset.adminSection === name));
  $('#sectionEyebrow').textContent = sectionMeta[name][0];
  $('#sectionTitle').textContent = sectionMeta[name][1];
  if (window.innerWidth < 700) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAll() {
  renderOverview();
  renderProducts();
  renderCategories();
  renderOrders();
  renderStaff();
  $('#sidebarProductCount').textContent = products.length;
  $('#sidebarCategoryCount').textContent = categories.length;
  $('#sidebarOrderCount').textContent = getAllOrders().length;
  $('#sidebarStaffCount').textContent = staff.length;
}

function renderOverview() {
  const orders = getAllOrders();
  $('#statTotal').textContent = products.length;
  $('#statPublished').textContent = products.filter((product) => product.status === 'published').length;
  $('#statOrderCount').textContent = orders.length;
  $('#statRevenue').textContent = money(orders.filter((order) => paymentState(order) === 'confirmed').reduce((sum, order) => sum + Number(order.total || 0), 0));
  const low = [...products].filter((product) => Number(product.stock) <= 2).sort((a, b) => a.stock - b.stock).slice(0, 4);
  $('#lowStockList').innerHTML = low.length ? low.map((product) => `<article class="attention-item">${productImage(product, 'mini-product-image')}<div><strong>${escapeHtml(product.title.ru || product.title.es)}</strong><small>${escapeHtml(product.brand)} · ${escapeHtml(product.sku || 'Без артикула')}</small></div><b>${Number(product.stock)} шт.</b></article>`).join('') : '<p class="no-attention">Все остатки в норме</p>';
  $('#recentOrdersBody').innerHTML = orders.slice(0, 3).map(orderRow).join('');
}

function orderRow(order, detailed = false) {
  const status = orderStatusLabels[order.status] || orderStatusLabels.processing;
  if (detailed) {
    const options = Object.entries(orderStatusLabels).map(([value, label]) => `<option value="${value}" ${value === order.status ? 'selected' : ''}>${escapeHtml(label)}</option>`).join('');
    return `<tr><td><strong>${escapeHtml(order.id)}</strong></td><td>${escapeHtml(order.date)}</td><td><strong>${escapeHtml(order.customer)}</strong><small>${escapeHtml(order.contact)}</small></td><td>${escapeHtml(order.product)}</td><td><strong>${money(order.total)}</strong></td><td>${paymentChip(order)}</td><td>${escapeHtml(orderDelivery(order))}</td><td><select class="order-status-select ${escapeHtml(order.status || 'processing')}" data-order-status="${escapeHtml(order.id)}" aria-label="Статус заказа ${escapeHtml(order.id)}">${options}</select></td></tr>`;
  }
  return `<tr><td><strong>${escapeHtml(order.id)}</strong><small>${escapeHtml(order.date)}</small></td><td><strong>${escapeHtml(order.customer)}</strong><small>${escapeHtml(order.contact)}</small></td><td>${escapeHtml(orderDelivery(order))}</td><td><strong>${money(order.total)}</strong></td><td>${paymentChip(order)}</td><td><span class="status-chip ${escapeHtml(order.status || 'processing')}">${escapeHtml(status)}</span></td></tr>`;
}

function renderOrders() {
  $('#ordersBody').innerHTML = getAllOrders().map((order) => orderRow(order, true)).join('');
}

function renderCategories() {
  $('#categoryList').innerHTML = categories.map((category) => {
    const productCount = products.filter((product) => product.category === category.id).length;
    return `<article class="category-card">
      <div class="category-card-heading"><div><span>Код категории</span><strong>${escapeHtml(category.id)}</strong></div><b>${productCount} ${productCount === 1 ? 'товар' : 'товаров'}</b></div>
      <div class="category-language-list"><span><small>RU</small><strong>${escapeHtml(category.name?.ru || category.name?.es)}</strong></span><span><small>ES</small><strong>${escapeHtml(category.name?.es)}</strong></span><span><small>EN</small><strong>${escapeHtml(category.name?.en || category.name?.es)}</strong></span></div>
      <div class="category-actions"><button class="small-button" type="button" data-edit-category="${escapeHtml(category.id)}">Изменить</button><button class="small-button delete" type="button" data-delete-category="${escapeHtml(category.id)}" aria-label="Удалить категорию">×</button></div>
    </article>`;
  }).join('');
}

function categoryIdFromName(name) {
  const base = String(name || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `category-${Date.now().toString(36)}`;
  let candidate = base;
  let suffix = 2;
  while (categories.some((category) => category.id === candidate)) candidate = `${base}-${suffix++}`;
  return candidate;
}

function openCategoryEditor(id = null) {
  const form = $('#categoryForm');
  form.reset();
  const category = id ? categories.find((item) => item.id === id) : null;
  $('#categoryEditorTitle').textContent = category ? 'Изменить категорию' : 'Новая категория';
  form.elements.id.value = category?.id || '';
  form.elements.nameEs.value = category?.name?.es || '';
  form.elements.nameEn.value = category?.name?.en || '';
  form.elements.nameRu.value = category?.name?.ru || '';
  $('#categoryEditor').showModal();
}

function closeCategoryEditor() {
  if ($('#categoryEditor').open) $('#categoryEditor').close();
}

function saveCategoryFromForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const existingId = String(data.get('id') || '');
  const nameEs = String(data.get('nameEs') || '').trim();
  const category = {
    id: existingId || categoryIdFromName(nameEs),
    name: {
      es: nameEs,
      en: String(data.get('nameEn') || '').trim() || nameEs,
      ru: String(data.get('nameRu') || '').trim() || nameEs
    }
  };
  const index = categories.findIndex((item) => item.id === existingId);
  if (index >= 0) categories[index] = category; else categories.push(category);
  closeCategoryEditor();
  saveCategories(existingId ? 'Категория обновлена' : 'Новая категория добавлена');
}

function fillProductCategoryOptions(selectedId) {
  const select = $('#productCategorySelect');
  select.innerHTML = categories.map((category) => `<option value="${escapeHtml(category.id)}">${escapeHtml(categoryLabel(category.id))}</option>`).join('');
  select.value = categories.some((category) => category.id === selectedId) ? selectedId : categories[0]?.id || '';
}

function renderProducts() {
  const query = ($('#adminProductSearch')?.value || '').trim().toLowerCase();
  const status = $('#adminProductStatus')?.value || 'all';
  const list = products.filter((product) => {
    const searchText = `${product.title.ru} ${product.title.es} ${product.brand} ${product.sku || ''}`.toLowerCase();
    return (!query || searchText.includes(query)) && (status === 'all' || product.status === status);
  });
  $('#adminProductEmpty').hidden = list.length > 0;
  $('#adminProductList').hidden = list.length === 0;
  $('#adminProductList').innerHTML = list.map((product) => `<article class="admin-product-row">
    <div class="admin-product-main">${productImage(product, 'admin-product-image')}<div><h3>${escapeHtml(product.title.ru || product.title.es)}</h3><p>${escapeHtml(product.brand)} · ${escapeHtml(categoryLabel(product.category))} · ${escapeHtml(product.sku || 'Без артикула')}</p></div></div>
    <div class="admin-product-cell"><span>Цена</span><strong>${money(product.price)}</strong></div>
    <div class="admin-product-cell"><span>Остаток</span><strong>${Number(product.stock)} шт.</strong></div>
    <div class="admin-product-cell"><span>Старая цена</span><strong>${money(product.oldPrice)}</strong></div>
    <div class="admin-product-cell"><span>Статус</span><b class="catalog-state ${product.status}">${product.status === 'published' ? '● На витрине' : '○ Скрыт'}</b></div>
    <div class="product-actions"><button class="small-button" type="button" data-edit-product="${escapeHtml(product.id)}">Изменить</button><button class="small-button ${product.status === 'published' ? 'hide' : 'publish'}" type="button" data-toggle-product="${escapeHtml(product.id)}">${product.status === 'published' ? 'Скрыть' : 'Опубликовать'}</button><button class="small-button delete" type="button" data-delete-product="${escapeHtml(product.id)}" aria-label="Удалить">×</button></div>
  </article>`).join('');
}

function fillProductPreview(url) {
  const safe = safeImageUrl(url);
  $('#adminImagePreview').innerHTML = safe ? `<img src="${escapeHtml(safe)}" alt="Предпросмотр" onerror="this.parentElement.innerHTML='<b>ФОТО</b>'">` : '<b>ФОТО</b>';
}

function openProductEditor(id = null) {
  const form = $('#productForm');
  form.reset();
  const product = id ? products.find((item) => item.id === id) : null;
  $('#productEditorTitle').textContent = product ? 'Изменить товар' : 'Новый товар';
  form.elements.id.value = product?.id || '';
  form.elements.titleEs.value = product?.title.es || '';
  form.elements.titleEn.value = product?.title.en || '';
  form.elements.titleRu.value = product?.title.ru || '';
  form.elements.brand.value = product?.brand || '';
  fillProductCategoryOptions(product?.category || categories[0]?.id);
  $('#autoSkuPreview').textContent = product?.sku || 'Будет присвоен при сохранении';
  form.elements.price.value = product?.price ?? '';
  form.elements.oldPrice.value = product?.oldPrice ?? '';
  form.elements.stock.value = product?.stock ?? 1;
  form.elements.status.value = product?.status || 'published';
  form.elements.descriptionEs.value = product?.description.es || '';
  form.elements.descriptionEn.value = product?.description.en || '';
  form.elements.descriptionRu.value = product?.description.ru || '';
  form.elements.imageUrl.value = /^https:\/\//i.test(product?.image || '') ? product.image : '';
  form.elements.imageData.value = product?.image || '';
  $('#productImageFile').value = '';
  fillProductPreview(product?.image);
  $('#productEditor').showModal();
  document.body.classList.add('locked');
}

function closeProductEditor() {
  if ($('#productEditor').open) $('#productEditor').close();
  document.body.classList.remove('locked');
}

function saveProductFromForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const existingId = formData.get('id');
  const existingProduct = products.find((item) => item.id === existingId);
  const titleEs = String(formData.get('titleEs')).trim();
  const titleEn = String(formData.get('titleEn')).trim() || titleEs;
  const titleRu = String(formData.get('titleRu')).trim() || titleEs;
  const image = String(formData.get('imageData')).trim() || String(formData.get('imageUrl')).trim();
  const product = {
    id: existingId || `product-${Date.now()}`,
    sku: existingProduct?.sku || generateSku(),
    brand: String(formData.get('brand')).trim(),
    category: String(formData.get('category')),
    price: Number(formData.get('price')),
    oldPrice: Number(formData.get('oldPrice')) || Number(formData.get('price')),
    stock: Number(formData.get('stock')),
    status: String(formData.get('status')),
    image: safeImageUrl(image),
    title: { es: titleEs, en: titleEn, ru: titleRu },
    description: { es: String(formData.get('descriptionEs')).trim(), en: String(formData.get('descriptionEn')).trim() || String(formData.get('descriptionEs')).trim(), ru: String(formData.get('descriptionRu')).trim() || String(formData.get('descriptionEs')).trim() }
  };
  const index = products.findIndex((item) => item.id === existingId);
  if (index >= 0) products[index] = product; else products.unshift(product);
  closeProductEditor();
  saveProducts(existingId ? 'Карточка товара обновлена' : 'Товар добавлен и опубликован');
}

function renderStaff() {
  $('#staffList').innerHTML = staff.map((person) => `<article class="staff-card ${person.role === 'owner' ? 'owner-card' : ''}"><span class="staff-card-state ${person.status === 'paused' ? 'paused' : ''}"></span><div class="staff-avatar">${escapeHtml(initials(person.name))}</div><h3>${escapeHtml(person.name)}</h3><p>${escapeHtml(person.email)}</p><div class="staff-meta"><span>Роль <strong>${escapeHtml(roleLabels[person.role])}</strong></span><span>Права <strong>${escapeHtml(rolePermissions[person.role])}</strong></span><span>Статус <strong>${person.status === 'active' ? 'Активен' : 'Приостановлен'}</strong></span></div>${person.role === 'owner' ? '<div class="staff-actions"><button class="small-button" type="button" disabled>Основной владелец</button></div>' : `<div class="staff-actions"><button class="small-button" type="button" data-edit-staff="${escapeHtml(person.id)}">Изменить</button><button class="small-button delete" type="button" data-delete-staff="${escapeHtml(person.id)}">×</button></div>`}</article>`).join('');
}

function openStaffEditor(id = null) {
  const form = $('#staffForm');
  form.reset();
  const person = id ? staff.find((item) => item.id === id) : null;
  $('#staffEditorTitle').textContent = person ? 'Изменить сотрудника' : 'Новый сотрудник';
  form.elements.id.value = person?.id || '';
  form.elements.name.value = person?.name || '';
  form.elements.email.value = person?.email || '';
  form.elements.role.value = person?.role || 'manager';
  form.elements.status.value = person?.status || 'active';
  $('#staffEditor').showModal();
}

function closeStaffEditor() { if ($('#staffEditor').open) $('#staffEditor').close(); }

function saveStaffFromForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const id = String(data.get('id'));
  const person = { id: id || `staff-${Date.now()}`, name: String(data.get('name')).trim(), email: String(data.get('email')).trim(), role: String(data.get('role')), status: String(data.get('status')) };
  const index = staff.findIndex((item) => item.id === id);
  if (index >= 0) staff[index] = person; else staff.push(person);
  closeStaffEditor();
  saveStaff(id ? 'Данные сотрудника обновлены' : 'Демо-сотрудник добавлен');
}

function exportOrders() {
  const columns = ['Заказ', 'Дата', 'Клиент', 'Телефон', 'Товар', 'Сумма EUR', 'Оплата', 'Получение', 'Статус'];
  const rows = getAllOrders().map((order) => [
    order.id,
    order.date,
    order.customer,
    order.contact,
    order.product,
    Number(order.total || 0).toFixed(2),
    paymentState(order) === 'confirmed' ? 'Подтверждена' : 'Не списывалась — демо',
    orderDelivery(order),
    orderStatusLabels[order.status] || orderStatusLabels.processing
  ]);
  const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
  const csv = [columns, ...rows].map((row) => row.map(csvCell).join(';')).join('\n');
  const blob = new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'isgroup-orders-demo.csv';
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('Отчёт по заказам скачан');
}

$('#loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const valid = $('#loginEmail').value.trim().toLowerCase() === ADMIN_EMAIL && $('#loginPassword').value === ADMIN_PASSWORD;
  $('#loginError').hidden = valid;
  if (!valid) return;
  sessionStorage.setItem('isgroup-demo-admin-session', '1');
  showAdmin();
});

$('#logoutButton').addEventListener('click', () => { sessionStorage.removeItem('isgroup-demo-admin-session'); showLogin(); });
$('#resetPresentationDemo').addEventListener('click', () => {
  if (!window.confirm('Подготовить сайт к новому показу? Тестовые заказы, корзина и локальные изменения товаров, категорий и сотрудников будут удалены.')) return;
  [PRODUCT_STORAGE_KEY, STAFF_STORAGE_KEY, ORDER_STORAGE_KEY, CART_STORAGE_KEY, CATEGORY_STORAGE_KEY, ORDER_STATUS_STORAGE_KEY, SKU_COUNTER_STORAGE_KEY].forEach((key) => localStorage.removeItem(key));
  products = clone(defaultProducts);
  categories = clone(defaultCategories);
  staff = clone(defaultStaff);
  storefrontOrders = [];
  orderStatusOverrides = {};
  renderAll();
  showSection('overview');
  showToast('Демо подготовлено к новому показу');
});
$('#adminProductSearch').addEventListener('input', renderProducts);
$('#adminProductStatus').addEventListener('change', renderProducts);
$('#addProductButton').addEventListener('click', () => openProductEditor());
$('#closeProductEditor').addEventListener('click', closeProductEditor);
$('#cancelProductEditor').addEventListener('click', closeProductEditor);
$('#productForm').addEventListener('submit', saveProductFromForm);
$('#exportOrders').addEventListener('click', exportOrders);
$('#addCategoryButton').addEventListener('click', () => openCategoryEditor());
$('#closeCategoryEditor').addEventListener('click', closeCategoryEditor);
$('#cancelCategoryEditor').addEventListener('click', closeCategoryEditor);
$('#categoryForm').addEventListener('submit', saveCategoryFromForm);
$('#addStaffButton').addEventListener('click', () => openStaffEditor());
$('#closeStaffEditor').addEventListener('click', closeStaffEditor);
$('#cancelStaffEditor').addEventListener('click', closeStaffEditor);
$('#staffForm').addEventListener('submit', saveStaffFromForm);

$('#productImageFile').addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (file.size > 1_500_000) { event.target.value = ''; showToast('Для демо выберите изображение меньше 1,5 МБ'); return; }
  const reader = new FileReader();
  reader.addEventListener('load', () => { $('#productForm').elements.imageData.value = reader.result; $('#productForm').elements.imageUrl.value = ''; fillProductPreview(reader.result); });
  reader.readAsDataURL(file);
});

$('#productForm').elements.imageUrl.addEventListener('input', (event) => { $('#productForm').elements.imageData.value = event.target.value; fillProductPreview(event.target.value); });

$('#resetDemoProducts').addEventListener('click', () => {
  if (!window.confirm('Вернуть исходный демонстрационный каталог? Все локальные изменения товаров будут удалены.')) return;
  products = clone(defaultProducts);
  localStorage.removeItem(PRODUCT_STORAGE_KEY);
  localStorage.removeItem(SKU_COUNTER_STORAGE_KEY);
  renderAll();
  showToast('Демонстрационный каталог восстановлен');
});

document.addEventListener('click', (event) => {
  const sectionButton = event.target.closest('[data-admin-section]');
  if (sectionButton) showSection(sectionButton.dataset.adminSection);
  const goButton = event.target.closest('[data-go-section]');
  if (goButton) showSection(goButton.dataset.goSection);
  const editProduct = event.target.closest('[data-edit-product]');
  if (editProduct) openProductEditor(editProduct.dataset.editProduct);
  const toggleProduct = event.target.closest('[data-toggle-product]');
  if (toggleProduct) {
    const product = products.find((item) => item.id === toggleProduct.dataset.toggleProduct);
    if (product) { product.status = product.status === 'published' ? 'draft' : 'published'; saveProducts(product.status === 'published' ? 'Товар опубликован на витрине' : 'Товар скрыт с витрины'); }
  }
  const deleteProduct = event.target.closest('[data-delete-product]');
  if (deleteProduct && window.confirm('Удалить эту демонстрационную карточку товара?')) { products = products.filter((item) => item.id !== deleteProduct.dataset.deleteProduct); saveProducts('Карточка товара удалена'); }
  const editCategory = event.target.closest('[data-edit-category]');
  if (editCategory) openCategoryEditor(editCategory.dataset.editCategory);
  const deleteCategory = event.target.closest('[data-delete-category]');
  if (deleteCategory) {
    const categoryId = deleteCategory.dataset.deleteCategory;
    const linkedProducts = products.filter((product) => product.category === categoryId).length;
    if (linkedProducts) showToast(`Сначала перенесите ${linkedProducts} товар(ов) в другую категорию`);
    else if (window.confirm('Удалить эту категорию?')) { categories = categories.filter((category) => category.id !== categoryId); saveCategories('Категория удалена'); }
  }
  const editStaff = event.target.closest('[data-edit-staff]');
  if (editStaff) openStaffEditor(editStaff.dataset.editStaff);
  const deleteStaff = event.target.closest('[data-delete-staff]');
  if (deleteStaff && window.confirm('Удалить демонстрационного сотрудника?')) { staff = staff.filter((item) => item.id !== deleteStaff.dataset.deleteStaff); saveStaff('Сотрудник удалён'); }
});

document.addEventListener('change', (event) => {
  const statusSelect = event.target.closest('[data-order-status]');
  if (!statusSelect) return;
  orderStatusOverrides[statusSelect.dataset.orderStatus] = statusSelect.value;
  saveOrderStatuses(`Статус заказа ${statusSelect.dataset.orderStatus} обновлён`);
});

function reloadBrowserData() {
  products = loadList(PRODUCT_STORAGE_KEY, defaultProducts).map((product) => ({ ...product, status: product.status || 'published' }));
  categories = loadList(CATEGORY_STORAGE_KEY, defaultCategories);
  staff = loadList(STAFF_STORAGE_KEY, defaultStaff);
  storefrontOrders = loadList(ORDER_STORAGE_KEY, []);
  orderStatusOverrides = loadObject(ORDER_STATUS_STORAGE_KEY);
  if (!$('#adminApp').hidden) renderAll();
}

window.addEventListener('storage', (event) => {
  if ([PRODUCT_STORAGE_KEY, STAFF_STORAGE_KEY, ORDER_STORAGE_KEY, CATEGORY_STORAGE_KEY, ORDER_STATUS_STORAGE_KEY].includes(event.key)) reloadBrowserData();
});
window.addEventListener('focus', reloadBrowserData);

if (sessionStorage.getItem('isgroup-demo-admin-session') === '1') showAdmin(); else showLogin();
