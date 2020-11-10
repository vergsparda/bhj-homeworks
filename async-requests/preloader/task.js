'use strict'

const items = document.getElementById('items'),
  loader = document.querySelector('.loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.timeout = 15000;
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    loader.classList.remove('loader_active');
    const obj = JSON.parse(xhr.response).response.Valute;
    for (const el in obj) {
      const item = `<div class="item">
                            <div class="item__code">
                                ${obj[el].CharCode}
                            </div>
                            <div class="item__value">
                                ${obj[el].Value}
                            </div>
                            <div class="item__currency">
                                ${obj[el].Name}
                            </div>
                        </div>`;
      items.insertAdjacentHTML('afterbegin', item);
    };
    localStorage.setItem('currencyData', JSON.stringify(items.innerHTML));
  };
});

xhr.addEventListener('timeout', () => {
  aler('Ошибка, запрос превысил максимальное время');
})

window.addEventListener('load', () => {
  items.innerHTML = JSON.parse(localStorage.getItem(currencyData));
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
  xhr.send();
})
