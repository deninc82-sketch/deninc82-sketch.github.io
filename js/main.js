'use strict';

const classes = ['first', 'second', 'third', 'fourth'];

const p1 = document.querySelector('#p1');
p1.style.backgroundColor = 'gold';

const p2 = document.querySelector('#p2');
p2.style.backgroundColor = 'gold';
p2.style.color = 'blue';
p2.style.fontSize = '2rem';

const p3 = document.querySelector('#p3');
p3.classList.add('third');

const p4 = document.querySelector('#p4');
p4.classList.add('fourth', 'border');

const buttons = document.querySelectorAll('button');

const btn1 = buttons[0];
btn1.style.backgroundColor = 'gold';
btn1.style.color = 'blue';

const btn2 = buttons[1];
btn2.addEventListener('click', () => {
  p1.style.display = 'none';
});

const btn3 = buttons[2];
btn3.addEventListener('click', () => {
  p1.style.display = 'block';
});

const btn4 = buttons[3];
btn4.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
