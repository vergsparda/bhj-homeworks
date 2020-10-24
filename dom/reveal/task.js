"use strict"

document.addEventListener("scroll", () => {
  const reveal = Array.from(document.querySelectorAll(".reveal"));
  console.log(reveal);
  const viewportHeight = window.innerHeight;
  reveal.forEach (item => {
    let rect = item.getBoundingClientRect();
    console.log(rect.top);
    if (rect.bottom < viewportHeight){
      item.classList.add("reveal_active");
    } else if (rect.bottom > viewportHeight) {
      item.classList.remove("reveal_active");
    }
  });
})
