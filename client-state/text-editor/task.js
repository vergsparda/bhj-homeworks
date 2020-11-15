'use strict'

const clear = document.querySelector('.button'),
  editor = document.getElementById('editor');

function getText() {
  try {
    return JSON.parse(localStorage.getItem('note'));
  } catch (e) {
    return null;
  }
}

editor.addEventListener('change', () => {
  const text = editor.value;
  localStorage.note = JSON.stringify(text);
});

window.addEventListener('load', () => {
  const text = getText();
  editor.value = text;
});

clear.addEventListener('click', () => {
  editor.value = '';
  localStorage.note = '';
})
