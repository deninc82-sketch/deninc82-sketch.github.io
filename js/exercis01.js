'use strict';

const message1 = 'Hello';
const message2 = 'JavaScript';
alert(message1 + ' ' + message2 + '!');

const x = Number(prompt('Введіть значення x:'));
const y = Number(prompt('Введіть значення y:'));
alert('Сума: ' + (x + y));

const userNumber = Number(prompt('Вгадайте число від 1 до 5:'));
if (userNumber === 3) {
  alert('Congratulations, You did it!');
} else if (userNumber > 3) {
  alert('The number is too long');
} else {
  alert('The number is short');
}

const day = prompt('Введіть день тижня (наприклад, Понеділок або Monday):');

if (day === 'Понеділок' || day === 'Monday') {
  alert('Start of the work week!');
} else if (day === 'П\'ятниця' || day === 'Friday') {
  alert('End of the work week!');
} else {
  alert('A regular day');
}

switch (day) {
  case 'Понеділок':
  case 'Monday':
    alert('Start of the work week!');
    break;
  case 'П\'ятниця':
  case 'Friday':
    alert('End of the work week!');
    break;
  default:
    alert('A regular day');
}

const score = Number(prompt('Введіть кількість балів студента (score):'));
let grade;

if (score < 50) {
  grade = 'F';
} else if (score < 70) {
  grade = 'D';
} else if (score < 80) {
  grade = 'C';
} else if (score < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

alert('Ступінь студента: ' + grade);
