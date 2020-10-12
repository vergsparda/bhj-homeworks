const holes = document.getElementsByClassName ('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = index => holes[index];

for (let i = 0; i < holes.length; i++) {
  getHole(i).addEventListener('click', clickCheck);
}

function updateCounter(counter) {
  let num = parseInt(counter.textContent);
  num++;
  counter.textContent = num;
  return num;
}

function resetCounter() {
  dead.textContent = 0;
  lost.textContent = 0;
}

function popup(message) {
  setTimeout(() => {
    alert(message);
    resetCounter();
  })
}
function clickCheck() {
  if(this.classList.contains('hole_has-mole')) {
    if (updateCounter(dead) === 10) {
      popup('Вы победили!')
    }
  } else {
    if (updateCounter(lost) === 5) {
      popup('Вы проиграли')
    }
  }
}
