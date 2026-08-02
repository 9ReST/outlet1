const products = [
  {
    id: 'samsung-qled-55', brand: 'Samsung', category: 'tv', price: 449.5, oldPrice: 899, stock: 2, emoji: '📺',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=82',
    title: { es: 'Televisor Samsung QLED 55”', en: 'Samsung QLED 55” TV', ru: 'Телевизор Samsung QLED 55”' },
    description: { es: 'Televisor 4K de exposición, revisado y listo para disfrutar.', en: 'Inspected 4K display model, ready to enjoy.', ru: 'Проверенный выставочный телевизор 4K, готовый к использованию.' },
    condition: { es: 'Exposición', en: 'Display model', ru: 'Витринный' }
  },
  {
    id: 'delonghi-magnifica', brand: 'De’Longhi', category: 'coffee', price: 249.5, oldPrice: 499, stock: 3, emoji: '☕',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=82',
    title: { es: 'Cafetera Magnifica Start', en: 'Magnifica Start coffee machine', ru: 'Кофемашина Magnifica Start' },
    description: { es: 'Café recién molido con controles sencillos y vaporizador manual.', en: 'Freshly ground coffee with simple controls and a manual frother.', ru: 'Свежемолотый кофе, простое управление и ручной капучинатор.' },
    condition: { es: 'Nuevo', en: 'New', ru: 'Новый' }
  },
  {
    id: 'bosch-unlimited-7', brand: 'Bosch', category: 'cleaning', price: 224.5, oldPrice: 449, stock: 4, emoji: '🧹',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=82',
    title: { es: 'Aspirador Bosch Unlimited 7', en: 'Bosch Unlimited 7 vacuum', ru: 'Пылесос Bosch Unlimited 7' },
    description: { es: 'Aspirador sin cable, flexible y potente para la limpieza diaria.', en: 'Flexible and powerful cordless vacuum for daily cleaning.', ru: 'Гибкий и мощный беспроводной пылесос для ежедневной уборки.' },
    condition: { es: 'Caja abierta', en: 'Open box', ru: 'Открытая упаковка' }
  },
  {
    id: 'cecotec-dual', brand: 'Cecotec', category: 'kitchen', price: 74.5, oldPrice: 149, stock: 5, emoji: '🍟',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=82',
    title: { es: 'Freidora de aire Cecofry Dual', en: 'Cecofry Dual air fryer', ru: 'Аэрогриль Cecofry Dual' },
    description: { es: 'Dos cubetas independientes para preparar platos distintos a la vez.', en: 'Two independent baskets to cook different dishes at once.', ru: 'Две независимые чаши для одновременного приготовления разных блюд.' },
    condition: { es: 'Nuevo', en: 'New', ru: 'Новый' }
  },
  {
    id: 'lg-washer', brand: 'LG', category: 'large', price: 299.5, oldPrice: 599, stock: 2, emoji: '🫧',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=82',
    title: { es: 'Lavadora LG 8 kg AI DD', en: 'LG 8 kg AI DD washer', ru: 'Стиральная машина LG 8 кг AI DD' },
    description: { es: 'Lavado inteligente de bajo consumo con capacidad para toda la familia.', en: 'Energy-efficient smart washing with room for the whole family.', ru: 'Экономичная умная стирка и загрузка для всей семьи.' },
    condition: { es: 'Exposición', en: 'Display model', ru: 'Витринный' }
  },
  {
    id: 'philips-lattego', brand: 'Philips', category: 'coffee', price: 274.5, oldPrice: 549, stock: 1, emoji: '🥛',
    image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&w=900&q=82',
    title: { es: 'Philips LatteGo Serie 3200', en: 'Philips LatteGo Series 3200', ru: 'Кофемашина Philips LatteGo 3200' },
    description: { es: 'Café y espuma de leche suave con un sistema fácil de limpiar.', en: 'Coffee and silky milk foam with an easy-clean system.', ru: 'Кофе и нежная молочная пенка, система легко очищается.' },
    condition: { es: 'Caja abierta', en: 'Open box', ru: 'Открытая упаковка' }
  }
];

const translations = {
  es: {
    announcement: 'Unidades limitadas · Recogida en Novelda · Envíos a España y UE', announcementLink: '¿Tienes una pregunta?', navCatalog: 'Catálogo', navHow: 'Cómo comprar', navDelivery: 'Entrega', navContact: 'Contacto',
    heroEyebrow: 'OUTLET DE TECNOLOGÍA Y HOGAR', heroTitle: 'Grandes marcas.<br><em>Precios pequeños.</em>', heroDescription: 'Productos nuevos, de exposición y últimas unidades con descuentos de hasta el 60%.', heroCta: 'Ver ofertas', heroSecondary: 'Entrega y recogida', heroStock: 'Stock real', heroStockNote: 'Pocas unidades de cada producto', from: 'desde',
    benefit1: 'Precios outlet', benefit1Text: 'Hasta −60% sobre PVP', benefit2: 'Compra segura', benefit2Text: 'Estado revisado y garantía', benefit3: 'Entrega flexible', benefit3Text: 'Recogida, España y UE',
    catalogEyebrow: 'CATÁLOGO ACTUAL', catalogTitle: 'Encuentra tu próxima oferta', catalogIntro: 'El stock cambia rápido. Reserva el producto para confirmar disponibilidad.', searchPlaceholder: 'Buscar producto o marca', categoryLabel: 'Categoría', brandLabel: 'Marca', sortLabel: 'Ordenar', priceLabel: 'Precio máximo', productsFound: 'productos', resetFilters: 'Limpiar filtros',
    allCategories: 'Todas', tv: 'Televisores', coffee: 'Café', cleaning: 'Limpieza', kitchen: 'Cocina', large: 'Gran electrodoméstico', allBrands: 'Todas', featured: 'Destacados', priceAsc: 'Precio: menor primero', priceDesc: 'Precio: mayor primero', discount: 'Mayor descuento',
    emptyTitle: 'No encontramos productos', emptyText: 'Prueba a cambiar los filtros o el precio máximo.', units: 'uds.', viewProduct: 'Ver producto', addToCart: 'Añadir a la cesta', added: 'Añadido a la cesta',
    howEyebrow: 'SENCILLO Y TRANSPARENTE', howTitle: 'Cómo comprar', howIntro: 'Tres pasos para reservar una oferta antes de que se agote.', step1: 'Elige el producto', step1Text: 'Compara precio, estado, características y unidades disponibles.', step2: 'Solicita la reserva', step2Text: 'Añádelo a la cesta y deja tus datos. Confirmaremos el stock.', step3: 'Recibe la confirmación', step3Text: 'Acordamos el pago, la recogida o el tipo de entrega más conveniente.',
    deliveryEyebrow: 'TÚ ELIGES CÓMO RECIBIRLO', deliveryTitle: 'Desde Novelda hasta tu puerta', deliveryText: 'Calculamos cada envío según el tamaño, el peso y la dirección para ofrecerte la opción más conveniente.', askDelivery: 'Consultar una entrega', delivery1: 'Recogida en el outlet', delivery1Text: 'Reserva y recoge tu compra en Novelda.', delivery2: 'Envío por España', delivery2Text: 'Paquetería para productos pequeños y medianos.', delivery3: 'Entrega local de gran tamaño', delivery3Text: 'Electrodomésticos y productos voluminosos.', delivery4: 'Envío a la Unión Europea', delivery4Text: 'Presupuesto individual antes de confirmar.',
    contactEyebrow: '¿NECESITAS AYUDA?', contactTitle: 'Te ayudamos a elegir', contactText: 'Escríbenos para comprobar stock, estado del producto y opciones de entrega.', emailUs: 'Enviar email', footerText: 'Tecnología y hogar de primeras marcas a precio outlet.', footerCatalog: 'Catálogo', footerHelp: 'Ayuda', footerFollow: 'Síguenos', demoNotice: 'Versión de presentación. Los productos y precios son ejemplos.',
    yourCart: 'TU CESTA', cartProducts: 'productos', cartEmptyTitle: 'Tu cesta está vacía', cartEmptyText: 'Añade una oferta para solicitar una reserva.', total: 'Total', deliveryCalculated: 'La entrega se calcula según el producto y la dirección.', reserveButton: 'Solicitar reserva', remove: 'Eliminar',
    reservationEyebrow: 'SOLICITUD DE RESERVA', reservationTitle: 'Tus datos', reservationText: 'En la versión final el equipo recibirá la solicitud y confirmará disponibilidad, pago y entrega.', nameLabel: 'Nombre', phoneLabel: 'Teléfono', deliveryMethod: 'Forma de entrega', commentLabel: 'Comentario', demoWarning: 'Demostración: no se envían datos y no se realiza ningún cobro.', sendRequest: 'Enviar solicitud de prueba', pickup: 'Recogida en Novelda', spain: 'Envío por España', local: 'Entrega local de gran tamaño', eu: 'Envío a la Unión Europea', requestSent: 'Solicitud de prueba creada correctamente',
    condition: 'Estado', stock: 'Disponibles', category: 'Categoría', warranty: 'Garantía', warrantyValue: 'A confirmar según producto'
  },
  en: {
    announcement: 'Limited units · Pickup in Novelda · Delivery across Spain and EU', announcementLink: 'Have a question?', navCatalog: 'Catalogue', navHow: 'How to buy', navDelivery: 'Delivery', navContact: 'Contact',
    heroEyebrow: 'TECH & HOME OUTLET', heroTitle: 'Big brands.<br><em>Smaller prices.</em>', heroDescription: 'New, display and last-unit products with discounts of up to 60%.', heroCta: 'See offers', heroSecondary: 'Delivery & pickup', heroStock: 'Live stock', heroStockNote: 'Only a few units per product', from: 'from',
    benefit1: 'Outlet prices', benefit1Text: 'Up to 60% off RRP', benefit2: 'Safe purchase', benefit2Text: 'Inspected condition and warranty', benefit3: 'Flexible delivery', benefit3Text: 'Pickup, Spain and EU',
    catalogEyebrow: 'CURRENT CATALOGUE', catalogTitle: 'Find your next deal', catalogIntro: 'Stock changes quickly. Reserve a product to confirm availability.', searchPlaceholder: 'Search product or brand', categoryLabel: 'Category', brandLabel: 'Brand', sortLabel: 'Sort', priceLabel: 'Maximum price', productsFound: 'products', resetFilters: 'Clear filters',
    allCategories: 'All', tv: 'TVs', coffee: 'Coffee', cleaning: 'Cleaning', kitchen: 'Kitchen', large: 'Large appliances', allBrands: 'All', featured: 'Featured', priceAsc: 'Price: low to high', priceDesc: 'Price: high to low', discount: 'Biggest discount',
    emptyTitle: 'No products found', emptyText: 'Try changing the filters or maximum price.', units: 'units', viewProduct: 'View product', addToCart: 'Add to cart', added: 'Added to cart',
    howEyebrow: 'SIMPLE AND CLEAR', howTitle: 'How to buy', howIntro: 'Three steps to reserve a deal before it sells out.', step1: 'Choose a product', step1Text: 'Compare price, condition, features and available units.', step2: 'Request a reservation', step2Text: 'Add it to the cart and leave your details. We will confirm stock.', step3: 'Get confirmation', step3Text: 'We agree on payment, pickup or the most convenient delivery type.',
    deliveryEyebrow: 'CHOOSE HOW TO RECEIVE IT', deliveryTitle: 'From Novelda to your door', deliveryText: 'We calculate each shipment by size, weight and destination to offer the most convenient option.', askDelivery: 'Ask about delivery', delivery1: 'Outlet pickup', delivery1Text: 'Reserve and collect your purchase in Novelda.', delivery2: 'Delivery across Spain', delivery2Text: 'Parcel delivery for small and medium items.', delivery3: 'Local large-item delivery', delivery3Text: 'Appliances and bulky products.', delivery4: 'European Union delivery', delivery4Text: 'Individual quote before confirmation.',
    contactEyebrow: 'NEED HELP?', contactTitle: 'We’ll help you choose', contactText: 'Message us to check stock, product condition and delivery options.', emailUs: 'Send email', footerText: 'Top-brand technology and home appliances at outlet prices.', footerCatalog: 'Catalogue', footerHelp: 'Help', footerFollow: 'Follow us', demoNotice: 'Presentation version. Products and prices are examples.',
    yourCart: 'YOUR CART', cartProducts: 'products', cartEmptyTitle: 'Your cart is empty', cartEmptyText: 'Add an offer to request a reservation.', total: 'Total', deliveryCalculated: 'Delivery is calculated by product and address.', reserveButton: 'Request reservation', remove: 'Remove',
    reservationEyebrow: 'RESERVATION REQUEST', reservationTitle: 'Your details', reservationText: 'In the final version the team will receive the request and confirm availability, payment and delivery.', nameLabel: 'Name', phoneLabel: 'Phone', deliveryMethod: 'Delivery method', commentLabel: 'Comment', demoWarning: 'Demo: no data is sent and no payment is made.', sendRequest: 'Send test request', pickup: 'Pickup in Novelda', spain: 'Delivery across Spain', local: 'Local large-item delivery', eu: 'European Union delivery', requestSent: 'Test request created successfully',
    condition: 'Condition', stock: 'Available', category: 'Category', warranty: 'Warranty', warrantyValue: 'To be confirmed by product'
  },
  ru: {
    announcement: 'Ограниченный остаток · Самовывоз в Новельде · Доставка по Испании и ЕС', announcementLink: 'Есть вопрос?', navCatalog: 'Каталог', navHow: 'Как купить', navDelivery: 'Доставка', navContact: 'Контакты',
    heroEyebrow: 'АУТЛЕТ ТЕХНИКИ И ТОВАРОВ ДЛЯ ДОМА', heroTitle: 'Известные бренды.<br><em>Низкие цены.</em>', heroDescription: 'Новые, витринные товары и последние единицы со скидками до 60%.', heroCta: 'Смотреть предложения', heroSecondary: 'Доставка и самовывоз', heroStock: 'Реальный остаток', heroStockNote: 'Несколько единиц каждого товара', from: 'от',
    benefit1: 'Аутлет-цены', benefit1Text: 'Скидки до 60% от РРЦ', benefit2: 'Безопасная покупка', benefit2Text: 'Проверка состояния и гарантия', benefit3: 'Удобная доставка', benefit3Text: 'Самовывоз, Испания и ЕС',
    catalogEyebrow: 'АКТУАЛЬНЫЙ КАТАЛОГ', catalogTitle: 'Найдите выгодное предложение', catalogIntro: 'Остатки быстро меняются. Оформите резерв, чтобы подтвердить наличие.', searchPlaceholder: 'Название товара или бренд', categoryLabel: 'Категория', brandLabel: 'Бренд', sortLabel: 'Сортировка', priceLabel: 'Максимальная цена', productsFound: 'товаров', resetFilters: 'Сбросить фильтры',
    allCategories: 'Все', tv: 'Телевизоры', coffee: 'Кофе', cleaning: 'Уборка', kitchen: 'Кухня', large: 'Крупная техника', allBrands: 'Все', featured: 'Рекомендуемые', priceAsc: 'Сначала дешевле', priceDesc: 'Сначала дороже', discount: 'По размеру скидки',
    emptyTitle: 'Товары не найдены', emptyText: 'Измените фильтры или максимальную цену.', units: 'шт.', viewProduct: 'Открыть товар', addToCart: 'Добавить в корзину', added: 'Добавлено в корзину',
    howEyebrow: 'ПРОСТО И ПОНЯТНО', howTitle: 'Как купить', howIntro: 'Три шага, чтобы зарезервировать товар до его продажи.', step1: 'Выберите товар', step1Text: 'Сравните цену, состояние, характеристики и доступный остаток.', step2: 'Оставьте заявку', step2Text: 'Добавьте товар в корзину и укажите данные. Мы подтвердим наличие.', step3: 'Получите подтверждение', step3Text: 'Согласуем оплату, самовывоз или подходящий вариант доставки.',
    deliveryEyebrow: 'ВЫБЕРИТЕ СПОСОБ ПОЛУЧЕНИЯ', deliveryTitle: 'Из Новельды до вашей двери', deliveryText: 'Рассчитаем доставку по размеру, весу и адресу и предложим удобный вариант.', askDelivery: 'Узнать стоимость доставки', delivery1: 'Самовывоз из Аутлета', delivery1Text: 'Зарезервируйте и заберите покупку в Новельде.', delivery2: 'Доставка по Испании', delivery2Text: 'Отправка небольших и средних товаров.', delivery3: 'Местная доставка крупных товаров', delivery3Text: 'Бытовая техника и крупногабаритные товары.', delivery4: 'Доставка по Евросоюзу', delivery4Text: 'Индивидуальный расчёт до подтверждения.',
    contactEyebrow: 'НУЖНА ПОМОЩЬ?', contactTitle: 'Поможем выбрать', contactText: 'Напишите нам, чтобы проверить наличие, состояние товара и варианты доставки.', emailUs: 'Написать на почту', footerText: 'Техника и товары для дома известных брендов по аутлет-ценам.', footerCatalog: 'Каталог', footerHelp: 'Помощь', footerFollow: 'Мы в соцсетях', demoNotice: 'Презентационная версия. Товары и цены приведены для примера.',
    yourCart: 'ВАША КОРЗИНА', cartProducts: 'товаров', cartEmptyTitle: 'Корзина пуста', cartEmptyText: 'Добавьте предложение, чтобы отправить заявку на резерв.', total: 'Сумма', deliveryCalculated: 'Доставка рассчитывается по товару и адресу.', reserveButton: 'Оформить резерв', remove: 'Удалить',
    reservationEyebrow: 'ЗАЯВКА НА РЕЗЕРВ', reservationTitle: 'Ваши данные', reservationText: 'В полной версии сотрудники получат заявку и подтвердят наличие, оплату и доставку.', nameLabel: 'Имя', phoneLabel: 'Телефон', deliveryMethod: 'Способ получения', commentLabel: 'Комментарий', demoWarning: 'Демонстрация: данные никуда не отправляются, оплата не списывается.', sendRequest: 'Отправить тестовую заявку', pickup: 'Самовывоз в Новельде', spain: 'Доставка по Испании', local: 'Местная доставка крупного товара', eu: 'Доставка по Евросоюзу', requestSent: 'Тестовая заявка успешно создана',
    condition: 'Состояние', stock: 'В наличии', category: 'Категория', warranty: 'Гарантия', warrantyValue: 'Уточняется для каждого товара'
  }
};

const state = {
  lang: localStorage.getItem('isgroup-demo-lang') || 'es',
  cart: JSON.parse(localStorage.getItem('isgroup-demo-cart') || '{}')
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key) => translations[state.lang][key] || translations.es[key] || key;
const money = (value) => new Intl.NumberFormat(state.lang === 'ru' ? 'ru-RU' : state.lang === 'en' ? 'en-IE' : 'es-ES', { style: 'currency', currency: 'EUR' }).format(value);
const categoryName = (category) => t(category);

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('isgroup-demo-lang', lang);
  document.documentElement.lang = lang;
  $$('[data-lang]').forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
  $$('[data-i18n]').forEach((element) => { element.innerHTML = t(element.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  populateSelects();
  renderProducts();
  renderCart();
}

function populateSelects() {
  const currentCategory = $('#categoryFilter').value || 'all';
  const currentBrand = $('#brandFilter').value || 'all';
  const currentSort = $('#sortFilter').value || 'featured';
  $('#categoryFilter').innerHTML = ['all', 'tv', 'coffee', 'cleaning', 'kitchen', 'large'].map((item) => `<option value="${item}">${item === 'all' ? t('allCategories') : t(item)}</option>`).join('');
  $('#brandFilter').innerHTML = `<option value="all">${t('allBrands')}</option>${[...new Set(products.map((product) => product.brand))].sort().map((brand) => `<option value="${brand}">${brand}</option>`).join('')}`;
  $('#sortFilter').innerHTML = ['featured', 'priceAsc', 'priceDesc', 'discount'].map((item) => `<option value="${item}">${t(item)}</option>`).join('');
  $('#deliverySelect').innerHTML = ['pickup', 'spain', 'local', 'eu'].map((item) => `<option value="${item}">${t(item)}</option>`).join('');
  $('#categoryFilter').value = currentCategory;
  $('#brandFilter').value = currentBrand;
  $('#sortFilter').value = currentSort;
}

function filteredProducts() {
  const query = $('#searchInput').value.trim().toLowerCase();
  const category = $('#categoryFilter').value;
  const brand = $('#brandFilter').value;
  const maxPrice = Number($('#priceFilter').value);
  const sort = $('#sortFilter').value;
  const list = products.filter((product) => {
    const haystack = `${product.title[state.lang]} ${product.brand} ${categoryName(product.category)}`.toLowerCase();
    return (!query || haystack.includes(query)) && (category === 'all' || product.category === category) && (brand === 'all' || product.brand === brand) && product.price <= maxPrice;
  });
  if (sort === 'priceAsc') list.sort((a, b) => a.price - b.price);
  if (sort === 'priceDesc') list.sort((a, b) => b.price - a.price);
  if (sort === 'discount') list.sort((a, b) => (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice);
  return list;
}

function productImage(product, className = '') {
  return `<span class="product-emoji" aria-hidden="true">${product.emoji}</span><img class="${className}" src="${product.image}" alt="${product.title[state.lang]}" loading="lazy" onerror="this.remove()">`;
}

function renderProducts() {
  const list = filteredProducts();
  $('#resultCount').textContent = list.length;
  $('#priceOutput').textContent = money(Number($('#priceFilter').value));
  $('#emptyState').hidden = list.length > 0;
  $('#productGrid').innerHTML = list.map((product) => {
    const discount = Math.round((1 - product.price / product.oldPrice) * 100);
    return `<article class="product-card">
      <div class="product-media" role="button" tabindex="0" data-open-product="${product.id}" aria-label="${t('viewProduct')}: ${product.title[state.lang]}">
        ${productImage(product)}<span class="product-badge">−${discount}%</span><span class="product-stock">${product.stock} ${t('units')}</span>
      </div>
      <div class="product-body"><div class="product-meta"><span>${product.brand}</span><span>${categoryName(product.category)}</span></div>
      <h3>${product.title[state.lang]}</h3><div class="product-price-row"><div class="product-price"><del>${money(product.oldPrice)}</del><strong>${money(product.price)}</strong></div>
      <button class="add-button" type="button" data-add="${product.id}" aria-label="${t('addToCart')}">＋</button></div></div>
    </article>`;
  }).join('');
}

function saveCart() { localStorage.setItem('isgroup-demo-cart', JSON.stringify(state.cart)); }
function cartQuantity() { return Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0); }
function cartProductLabel(quantity) {
  if (state.lang === 'es') return quantity === 1 ? 'producto' : 'productos';
  if (state.lang === 'en') return quantity === 1 ? 'product' : 'products';
  const mod10 = quantity % 10;
  const mod100 = quantity % 100;
  if (mod10 === 1 && mod100 !== 11) return 'товар';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'товара';
  return 'товаров';
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  state.cart[id] = Math.min((state.cart[id] || 0) + 1, product.stock);
  saveCart(); renderCart(); showToast(t('added'));
}

function changeQuantity(id, delta) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  state.cart[id] = Math.max(0, Math.min((state.cart[id] || 0) + delta, product.stock));
  if (!state.cart[id]) delete state.cart[id];
  saveCart(); renderCart();
}

function renderCart() {
  const items = products.filter((product) => state.cart[product.id]);
  const quantity = cartQuantity();
  const total = items.reduce((sum, product) => sum + product.price * state.cart[product.id], 0);
  $('#cartCount').textContent = quantity;
  $('#cartTitleCount').textContent = quantity;
  $('#cartTitle [data-i18n="cartProducts"]').textContent = cartProductLabel(quantity);
  $('#cartTotal').textContent = money(total);
  $('#cartEmpty').hidden = items.length > 0;
  $('#cartFooter').hidden = items.length === 0;
  $('#cartItems').hidden = items.length === 0;
  $('#cartItems').innerHTML = items.map((product) => `<article class="cart-item">
    <div class="cart-item-media">${productImage(product)}</div>
    <div><h3>${product.title[state.lang]}</h3><div class="quantity"><button type="button" data-quantity="${product.id}" data-delta="-1">−</button><span>${state.cart[product.id]}</span><button type="button" data-quantity="${product.id}" data-delta="1">＋</button></div></div>
    <div class="cart-item-price"><strong>${money(product.price * state.cart[product.id])}</strong><button class="remove-item" type="button" data-remove="${product.id}">${t('remove')}</button></div>
  </article>`).join('');
}

function openCart() { $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('open'); $('#cartDrawer').setAttribute('aria-hidden', 'false'); document.body.classList.add('locked'); }
function closeCart() { $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('open'); $('#cartDrawer').setAttribute('aria-hidden', 'true'); document.body.classList.remove('locked'); }

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const discount = Math.round((1 - product.price / product.oldPrice) * 100);
  $('#productModalContent').innerHTML = `<div class="modal-product"><div class="modal-product-media">${productImage(product)}<span class="product-badge">−${discount}%</span></div>
    <div class="modal-product-copy"><p class="eyebrow orange">${product.brand} · ${categoryName(product.category)}</p><h2>${product.title[state.lang]}</h2><p class="modal-description">${product.description[state.lang]}</p>
    <div class="modal-specs"><span><b>${t('condition')}</b><strong>${product.condition[state.lang]}</strong></span><span><b>${t('stock')}</b><strong>${product.stock} ${t('units')}</strong></span><span><b>${t('category')}</b><strong>${categoryName(product.category)}</strong></span><span><b>${t('warranty')}</b><strong>${t('warrantyValue')}</strong></span></div>
    <div class="modal-price"><strong>${money(product.price)}</strong><del>${money(product.oldPrice)}</del></div><button class="button button-yellow full" type="button" data-add="${product.id}">${t('addToCart')}</button></div></div>`;
  $('#productModal').showModal();
}

let toastTimer;
function showToast(message) { clearTimeout(toastTimer); $('#toast').textContent = message; $('#toast').classList.add('show'); toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 2200); }

document.addEventListener('click', (event) => {
  const add = event.target.closest('[data-add]'); if (add) addToCart(add.dataset.add);
  const open = event.target.closest('[data-open-product]'); if (open) openProduct(open.dataset.openProduct);
  const quantity = event.target.closest('[data-quantity]'); if (quantity) changeQuantity(quantity.dataset.quantity, Number(quantity.dataset.delta));
  const remove = event.target.closest('[data-remove]'); if (remove) { delete state.cart[remove.dataset.remove]; saveCart(); renderCart(); }
});

document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-open-product]')) { event.preventDefault(); openProduct(event.target.dataset.openProduct); }
  if (event.key === 'Escape') closeCart();
});

['searchInput', 'categoryFilter', 'brandFilter', 'sortFilter', 'priceFilter'].forEach((id) => $(`#${id}`).addEventListener(id === 'searchInput' || id === 'priceFilter' ? 'input' : 'change', renderProducts));
$$('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
$('#resetFilters').addEventListener('click', () => { $('#searchInput').value = ''; $('#categoryFilter').value = 'all'; $('#brandFilter').value = 'all'; $('#sortFilter').value = 'featured'; $('#priceFilter').value = '1000'; renderProducts(); });
$('#cartTrigger').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
$('#overlay').addEventListener('click', closeCart);
$('#productModalClose').addEventListener('click', () => $('#productModal').close());
$('#checkoutButton').addEventListener('click', () => { if (!cartQuantity()) return; closeCart(); $('#checkoutModal').showModal(); });
$('#checkoutClose').addEventListener('click', () => $('#checkoutModal').close());
$('#checkoutForm').addEventListener('submit', (event) => { event.preventDefault(); $('#checkoutModal').close(); state.cart = {}; saveCart(); renderCart(); event.target.reset(); showToast(t('requestSent')); });
$('#menuTrigger').addEventListener('click', () => { const open = $('#mobileNav').classList.toggle('open'); $('#menuTrigger').setAttribute('aria-expanded', String(open)); });
$$('#mobileNav a').forEach((link) => link.addEventListener('click', () => { $('#mobileNav').classList.remove('open'); $('#menuTrigger').setAttribute('aria-expanded', 'false'); }));
$('#year').textContent = new Date().getFullYear();
setLanguage(state.lang);
