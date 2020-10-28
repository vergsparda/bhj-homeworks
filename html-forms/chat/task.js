'use strict'

const buttonWrite = document.querySelector(".chat-widget__side-text");
const chatInput = document.querySelector(".chat-widget__input");
const messages = document.querySelector('.chat-widget__messages');
const botAswers = [`Добрый день.`, 'Что?', 'Дайте телефон вашего администратора', 'У вас все в порядке?', 'На такой вопрос я не могу ответить', 'Могу ли я Вас попросить почистить мой кулер?', 'Да здравствует коммуизм!', 'На этот вопрос я пока не нашел ответа'];

buttonWrite.addEventListener('click', () => {
  const chatWidget = document.querySelector('.chat-widget');
  chatWidget.classList.add('chat-widget_active');
})

document.addEventListener('keypress', () => {
  if (event.key === 'Enter' && chatInput.value.length != 0) {
    const date = new Date();
    const time = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    console.log(time);
    messages.innerHTML += `
    <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">
            ${chatInput.value}
        </div>
    </div>
    `;

    chatInput.value = '';
    const randomIndex = Math.floor(Math.random() * Math.floor(botAswers.length));

    setTimeout(() => {
      messages.innerHTML += `
      <div class="message">
          <div class="message__time">${time}</div>
          <div class="message__text">
              ${botAswers[randomIndex]}
          </div>
      </div>`
      messages.lastElementChild.scrollIntoView(false);
    }, 1200);

    messages.lastElementChild.scrollIntoView(false);
  }

})
