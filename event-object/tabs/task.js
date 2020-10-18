"use strict"

const tabs = Array.from(document.querySelectorAll("div.tab"));
console.log(tabs);

const tabsContent = Array.from(document.querySelectorAll(".tab__content"));
console.log(tabsContent);

function changeTab() {
  tabs.forEach(element => {
    element.classList.remove("tab_active")
    event.target.classList.add("tab_active");
  });

  tabsContent.forEach(element => {
    element.classList.remove("tab__content_active");
  });

  tabsContent[tabs.indexOf(event.target)].classList.add("tab__content_active")
}

tabs.forEach(event => {
  event.addEventListener("click", changeTab)
});
