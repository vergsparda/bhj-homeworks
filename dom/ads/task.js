"use strict"
const rotateText = Array.from(document.querySelectorAll(".rotator__case"));
let delay = 0;

function rotator() {
  let item = rotateText.find(item => item.classList.contains("rotator__case_active"));
  let index = rotateText.findIndex(item => item.classList.contains("rotator__case_active"));
  item.classList.remove("rotator__case_active");
  if (index <rotateText.length - 1){
    rotateText[index].nextElementSibling.classList.add("rotator__case_active");
    rotateText[index].nextElementSibling.style.color = rotateText[index].nextElementSibling.dataset.color;
    delay = rotateText[index].nextElementSibling.dataset.speed;
  } else {
    rotateText[0].classList.add("rotator__case_active");
    rotateText[0].style.color = rotateText[0].dataset.color;
    delay = rotateText[0].dataset.speed;
  }
  setTimeout(rotator, delay);
}

setTimeout(rotator, delay);
