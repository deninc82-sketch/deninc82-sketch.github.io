'use strict';

function checkAgeWithQuestion(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAgeWithOr(age) {
  return age > 18 || confirm('Батьки дозволили?');
}

function minWithIf(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function minWithQuestion(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

const x = Number(prompt('Введіть число x для піднесення до степеня:'));
const n = Number(prompt('Введіть степінь n (ціле число від 1):'));

if (n < 1 || !Number.isInteger(n)) {
  alert('Будь ласка, введіть ціле число більше за 0');
} else {
  alert('Результат pow(x, n): ' + pow(x, n));
}

const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);
