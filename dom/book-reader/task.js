"use strict"

const fontButtons = Array.from(document.querySelectorAll(".font-size")),
  color = Array.from(document.querySelectorAll(".color")),
  book = document.querySelector('.book'),
  bookContent = document.querySelector(".book__content");

book.addEventListener('click', (event => {
  const change = (arr, className) => {
    const active = arr.find(item => item.classList.contains(className));
    active.classList.remove(className);
    event.target.classList.add(className);
  }
  event.preventDefault();
  if(event.target.matches('.font-size_small')){
      change(fontButtons, 'font-size_active');
      bookContent.className = 'book__content book_fs-small';
  } else if(event.target.matches('.font-size_big')){
      change(fontButtons, 'font-size_active');
      bookContent.className = 'book__content book_fs-big';
  } else if(event.target.matches('.font-size')){
      change (fontButtons, 'font-size_active');
      bookContent.className = 'book__content';
  }
}));
