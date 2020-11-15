'use strict'

const clear = document.querySelector('.button'),
  editor = document.getElementById('editor');

window.addEventListener('load', () => {
  editor.value = localStorage.getItem('note');
});

window.addEventListener('beforeunload', () => {
    localStorage.note = editor.value;
});

clear.addEventListener('click', () => {
  editor.value = '';
  localStorage.removeItem('note');
});
