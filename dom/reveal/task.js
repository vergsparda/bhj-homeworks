"use strict"

document.addEventListener("scroll", () => {
  const reveal = Array.from(document.querySelectorAll(".reveal"));
  const viewportHeight = window.innerHeight;
  reveal.forEach(item => {
    let rect = item.getBoundingClientRect();
    console.log(rect.bottom);
    if (rect.top < 0 || rect.bottom > viewportHeight) {
      item.classList.remove("reveal_active");
    } else if (rect.bottom < viewportHeight) {
      item.classList.add("reveal_active");
    }
  });
})
