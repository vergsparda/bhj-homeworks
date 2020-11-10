'use strict'

const poll = document.querySelector('.poll__title'),
  answers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const question = JSON.parse(xhr.response).data.title,
      pollAnswers = JSON.parse(xhr.response).data.answers;
    poll.insertAdjacentHTML('afterbegin', question);

    for (const i in pollAnswers) {
      const item = `<button class="poll__answer">
        ${pollAnswers[i]}
      </button>`;
      answers.insertAdjacentHTML('afterbegin', item);
    }
  }
});

answers.addEventListener('click', (e) => {
  if (!e.target.classList.contains('poll__answer')) return;
  alert('Спасибо, ваш голос засчитан!')
})
