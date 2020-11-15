'use strict'

const modal = document.querySelector('.modal'),
  close = document.querySelector('.modal__close');

close.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = "status=opened";
});


window.addEventListener('DOMContentLoaded', () => {
  if (!document.cookie.includes("status=opened")) {
    modal.classList.add('modal_active');
  } else if (modal.classList.contains('modal_active')) {
    return;
  }
});
