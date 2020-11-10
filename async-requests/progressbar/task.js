'use strict'

const progress = document.getElementById('progress'),
  form = document.getElementById('form');

function changeProgress() {
  progress.value += 0.002;
};

form.addEventListener('submit', (e) => {
  progress.value = 0;
  const formData = new FormData(),
    xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/upload.php');

  xhr.addEventListener('loadstart', changeProgress);
  xhr.addEventListener('load', changeProgress);
  xhr.addEventListener('loadend', changeProgress);
  xhr.addEventListener('progress', changeProgress);
  xhr.addEventListener('alert', changeProgress);

  xhr.send(formData);
  e.preventDefault();
});
