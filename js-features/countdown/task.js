const initialValue = document.getElementById("timer");
let timer = initialValue.textContent;

function getWinner() {
  const date = new Date(timer * 1000).toISOString().substr(11, 8);
  console.log(date);
  if (timer <= 0) {
    timer = 10;
    return alert(`You are the winner!`);

  } else {
    timer -= 1;
    initialValue.textContent = date;
  }
}

setInterval(getWinner, 1000);
