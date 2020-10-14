"use script"

const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__item'));

function findActiveIndex() {
  return slides.findIndex(a => a.classList.contains('slider__item_active'))
}

function changeActive(fromIndex, toIndex) {
  slides[fromIndex].classList.remove('slider__item_active');
  slides[toIndex].classList.add('slider__item_active');
}

function nextSlide() {
  const currentIndex = findActiveIndex();
  if (currentIndex === slides.length - 1) {
    changeActive(currentIndex, 0);
  } else
    changeActive (currentIndex, currentIndex + 1);
  }

function prevSlide() {
  const currentIndex = findActiveIndex();
  if (currentIndex === 0){
    changeActive(currentIndex, slides.length - 1)
  } else {
    changeActive(currentIndex, currentIndex - 1)
  }
}

left.addEventListener('click', nextSlide);
right.addEventListener('click', prevSlide);
