`use strict`

const addButtons = Array.from(document.querySelectorAll('.product__add')),
  productValue = Array.from(document.querySelectorAll('.product__quantity-value')),
  quantityInc = Array.from(document.querySelectorAll('.product__quantity-control_inc')),
  quantityDec = Array.from(document.querySelectorAll('.product__quantity-control_dec')),
  cart = document.querySelector('.cart__products'),
  products = Array.from(document.querySelectorAll('.product'));

function findValue(num) {
  for (let i = 0; i < productValue.length; i++) {
    if (i === num) return productValue[i];
  }
}

function findProduct(num) {
  const productValues = Array.from(document.querySelectorAll('.product__quantity-value'));
  for (let p = 0; p < products.length; p++) {
    if (p === num) return products[p];
  }
}

function findCartData(id) {
  const cartProducts = Array.from(document.querySelectorAll('.cart__product'));
  for (let i = 0; i < cartProducts.length; i++) {
    const cartId = cartProducts[i].getAttribute("data-id");
    if (cartId === id) return cartProducts[i];
  }
}

for (let i = 0; i < quantityInc.length; i++) {
  quantityInc[i].addEventListener('click', e => {
    e.preventDefault();
    const value = findValue(i);
    value.textContent = +(value.textContent) + 1;
  });
}
for (let i = 0; i < quantityDec.length; i++) {
  quantityDec[i].addEventListener('click', e => {
    e.preventDefault();
    const value = findValue(i);
    const numValue = +(value.textContent);
    if (numValue <= 1) {
      value.textContent = 1;
    } else {
      value.textContent = +(value.textContent) - 1;
    }
  });
}

function addProductToCart(num) {
  const product = findProduct(num),
    productId = product.getAttribute("data-id"),
    img = product.querySelector(".product__image").getAttribute('src'),
    value = findValue(num),
    quantity = +(value.textContent),
    cartData = findCartData(productId);

  if(cartData) {
    const quantityCart = cartData.querySelector('.cart__product-count');
    quantityCart.textContent = +(quantityCart.textContent) + quantity;
  } else {
    cart.innerHTML += `
        <div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${quantity}</div>
        </div>`;
  }
}

for (let i = 0; i < addButtons.length; i++){
  addButtons[i].addEventListener ('click', e => {
    e.preventDefault();
    addProductToCart(i);
  });
}
