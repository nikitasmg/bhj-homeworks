const products = document.querySelector(".products");
const cart = document.getElementById("cart");

/**
 * Change product value with any listner
 * @param {any} event
 */
const changeProductValue = (event) => {
  const item = event.target;
  if (item.classList.contains("product__quantity-control")) {
    let targetValue = item
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    if (item.classList.contains("product__quantity-control_dec")) {
      if (targetValue.innerText !== "1") {
        targetValue.innerText = +targetValue.innerText - 1;
      }
    } else {
      targetValue.innerText = +targetValue.innerText + 1;
    }
  }
};

/**
 * Add product in cart
 * @param {any} event
 */
const addToCart = (event) => {
  const item = event.target;
  const product = item.closest(".product");
  const imgSrc = product.querySelector(".product__image").src;
  const id = product.dataset.id;
  const productCount = product.querySelector(
    ".product__quantity-value"
  ).innerText;

  if (item.classList.contains("product__add")) {
    if (!cart.querySelector(".cart__product")) {
      cart.insertAdjacentHTML(
        "beforeend",
        ` <div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${imgSrc}">
            <div class="cart__product-count">${productCount}</div>
            <div class="cart__product-close"></div>
          </div> `
      );
    } else {
      const productsInCart = Array.from(
        document.querySelectorAll(".cart__product")
      );
      if (productsInCart.some((el) => el.dataset.id === id)) {
        const cartProduct = productsInCart.filter(
          (el) => el.dataset.id === id
        )[0];
        let cartProductCount = cartProduct.querySelector(
          ".cart__product-count"
        );
        cartProductCount.innerText =
          +cartProductCount.innerText + +productCount;
      } else {
        console.log("еще нет");
        cart.insertAdjacentHTML(
          "beforeend",
          ` <div class="cart__product" data-id="${id}">
                  <img class="cart__product-image" src="${imgSrc}">
                  <div class="cart__product-count">${productCount}</div>
                  <div class="cart__product-close"></div>
                </div> `
        );
      }
    }
  }
};

/**
 * Remove target product from cart
 * @param {any} event
 */
const removeFromCart = (event) => {
  const item = event.target;
  if (item.classList.contains("cart__product-close")) {
    const elementForRemove = item.closest(".cart__product");
    cart.removeChild(elementForRemove);
  }
};

products.addEventListener("click", (event) => {
  changeProductValue(event);
  addToCart(event);
});

cart.addEventListener("click", (event) => {
  removeFromCart(event);
});
