const clickCounter = document.getElementById("clicker__counter");
const cookieImg = document.getElementById("cookie");
let variable = true;

function clickCookie() {
  clickCounter.textContent++;
  if(variable) {
    cookieImg.width = 250;
    variable = false;
  } else {
    cookieImg.width = 200;
    variable = true;
  }
}

cookieImg.onclick = clickCookie;
