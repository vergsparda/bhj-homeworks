"use script"

const menuLinks = Array.from(document.querySelectorAll('a.menu__link'));

function clicks(e) {
  if (this.nextElementSibling) {
    e.preventDefault();
    const active = document.querySelector('.menu_active');
    if (active) {
      active.classList.remove('menu_active');
      if (e.target === active.previousElementSibling) {
        this.classList.remove('menu_active');
        return;
      }
    }
    this.nextElementSibling.classList.add("menu_active");
  }
 }

menuLinks.forEach((e => {
  e.addEventListener("click", clicks);
}));
