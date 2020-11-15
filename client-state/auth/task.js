'use strict'

const welcome = document.querySelector('.welcome'),
  signButton = document.getElementById('signin__btn'),
  signin = document.querySelector('.signin'),
  userId = document.getElementById('user_id'),
  signinForm = document.getElementById('signin__form'),
  xhr = new XMLHttpRequest();

window.addEventListener('load', () => {
  signin.classList.add('signin_active');
});

signButton.addEventListener('click', sentData);

function sentData(event) {
  event.preventDefault();
  const formData = new FormData(signinForm);
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);
      console.log(data);
      if(data.success) {
        localStorage.userId = data.user_id;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = localStorage.userId;
      } else {
        alert ('Неверный логин или пароль');
      }
    }
  });
  xhr.send(formData);
}
