'use strict';

// dom
const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('section');

// function
const active = (visible) => {
  sections.forEach(section => {
    section.classList.toggle('hidden', section !== visible);
  });
};

// eventListener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetClass = button.classList[0].replace('btn-', '');
    const targetSection = document.querySelector(`.${targetClass}`);

    if (targetSection) {
      active(targetSection);
    }
  });
});