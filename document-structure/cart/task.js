`use strict`

const cartBlock = document.querySelector('.cart'),
  cart = document.querySelector('.cart__products'),
  products = Array.from(document.querySelectorAll('.product'));

function getProductHTML(item) {
  return `<div class="cart__product" data-id="${item.id}">
                <img class="cart__product-image" src="${item.img.src}">
                <div class="cart__product-delete">&times;</div>
                <div class="cart__product-count">${item.amount.textContent}</div>
            </div>`;
};

function productFound (newItemID) {
    return inCart.find( item => {
      return item.dataset.id === newItemID;
    });
};

for (const product of products) {
  const buttons = {
    dec: product.querySelector('.product__quantity-control_dec'),
    inc: product.querySelector('.product__quantity-control_inc'),
    add: product.querySelector('.product__add')
  };

  const newItem = {
    amount: product.querySelector('.product__quantity-value'),
    id: product.dataset.id,
    img: product.querySelector('.product__image')
  };

  buttons.dec.addEventListener('click', () => {
    if (+newItem.amount.textContent === 1) return;
    newItem.amount.textContent--;
  });

  buttons.inc.addEventListener('click', () => {
    newItem.amount.textContent++;
  });

  buttons.add.addEventListener('click', () => {
    inCart = Array.from(cart.children);

    if (productFound(newItem.id) === undefined) {
      cart.insertAdjacentHTML('afterbegin', getProductHTML(newItem));
      cartBlock.classList.add('cart-active');
    } else {
      inCart.forEach(item => {
        if (item.dataset.id === newItem.id) {
          const amountCurrensy = item.querySelector('.cart__product-count');
          const newItemAmount = +amountCurrensy.textContent + +newItem.amount.textContent;
          amountCurrensy.textContent = newItemAmount;
        };
      });
    };
  });
}

cart.addEventListener('click', (e) => {
  const button = e.target;
  if (button.classList.contains('cart__product-delete')) {
    button.closest('.cart__product').remove();
    if (cart.children.length === 0) {
      cartBlock.classList.remove('cart-active');
    }
  }
});
