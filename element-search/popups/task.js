'use strict'

document.getElementById("modal_main").classList.add("modal_active");

function closePopup() {
  const modals = Array.from(document.getElementsByClassName("modal"));
  modals.forEach(e => e.classList.remove("modal_active"));
}

const closers = Array.from(document.getElementsByClassName("modal__close_times"));
closers.forEach(e => e.addEventListener("click", closePopup));

function doWell() {
  closePopup();
  document.getElementById("modal_success").classList.add("modal_active");
}

const doButton = Array.from(document.getElementsByClassName("show-success"));
doButton.forEach(e => e.addEventListener("click", doWell));
