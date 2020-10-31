// `use strict`

const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
let activeTip;


function showTip(el) {
  activeTip = document.querySelector('.tooltip');
  if (activeTip) {
    if (activeTip === el.nextElementSibling) {
      activeTip.remove();
      return;
    }
    activeTip.remove();
  }

  const tooltipText = el.getAttribute('title');
  el.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left: 0; top: 0">${tooltipText}</div>`);
  activeTip = document.querySelector('.tooltip');
  activeTip.style.display = 'block';
  activeTip.style.left = el.getBoundingClientRect().left + 'px';
  activeTip.style.top = el.getBoundingClientRect().bottom + 'px'
  addEventListener("scroll", () =>{
    activeTip.remove();
  })
}

tooltips.forEach(item => {
  item.addEventListener('click', e =>{
    e.preventDefault();
    showTip(item);
  });
});
