const products = document.querySelector('.products');
const cartContainer = document.getElementById('cart-container');
const cart = document.getElementById('cart');
let state = {};

/**
 * Меняет кол-во товара в продукте по кнопке + и -
 * @param {any} event
 */
const changeProductValue = (event) => {
  const item = event.target;
  if (item.classList.contains('product__quantity-control')) {
    let targetValue = item
      .closest('.product__quantity-controls')
      .querySelector('.product__quantity-value');
    if (item.classList.contains('product__quantity-control_dec')) {
      if (targetValue.innerText !== '1') {
        targetValue.innerText = +targetValue.innerText - 1;
      }
    } else {
      targetValue.innerText = +targetValue.innerText + 1;
    }
  }
};

/**Рендерит корзину из объекта state
 * @paramm
 */
const renderCart = () => {
  let cartProducts = [];
  for (let key in state) {
    const elem = state[key];
    cartProducts.push(`
    <div class="cart__product" data-id=${key}>
      <img class="cart__product-image" src=${elem.imgSrc}>
      <div class="cart__product-count">${elem.count}</div>
      <div class="cart__product-close"></div>
    </div>
    `);
  }
  cartProducts = cartProducts.join('');
  cart.innerHTML = cartProducts;
};

/**
 * Добавляет выбранный продукт в объект state
 * @param {any} event
 */
const addToState = (event) => {
  const item = event.target;
  const product = item.closest('.product');
  const imgSrc = product.querySelector('.product__image').src;
  const id = product.dataset.id;
  const productCount = product.querySelector(
    '.product__quantity-value'
  ).innerText;
  if (!state[id]) {
    state[id] = {
      imgSrc: imgSrc,
      count: productCount,
    };
  } else {
    const totalCount = Number(state[id].count) + Number(productCount);
    state[id] = {
      imgSrc: imgSrc,
      count: totalCount,
    };
  }
};

/**
 * Добавляет объект state в local storage
 * @param
 */

const addToLocalStorage = () => {
  localStorage.setItem('stateCart', JSON.stringify(state));
};

/**
 * Удаляет выбранный продукт из объекта state
 * @param {any} event
 */
const removeFromCart = (event) => {
  const item = event.target;
  if (item.classList.contains('cart__product-close')) {
    const dataId = item.closest('.cart__product').getAttribute('data-id');
    delete state[dataId];
  }
};

//События на добавления товара в state
products.addEventListener('click', (event) => {
  changeProductValue(event);

  if (event.target.classList.contains('product__add')) {
    addToState(event);
    renderCart();
    addToLocalStorage();
  }
});

//События на кнопки удаления из state
cart.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.classList.contains('cart__product-close')) {
    removeFromCart(event);
    renderCart();
    addToLocalStorage();
  }
});

//Рендерит корзину из local storage после загрузки документа
document.addEventListener('DOMContentLoaded', () => {
  const stateFromLocalStorage = JSON.parse(localStorage.getItem('stateCart'));
  state = { ...stateFromLocalStorage };
  renderCart();
});
