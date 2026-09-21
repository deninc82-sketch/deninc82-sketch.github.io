'use strict';

const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let w = 0;
while (w < fruits.length) {
  console.log(fruits[w]);
  w++;
}

let d = 0;
if (fruits.length > 0) {
  do {
    console.log(fruits[d]);
    d++;
  } while (d < fruits.length);
}

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

const names = ['Batman'];

names.push('Joker');

names.unshift('Bane');

if (!names.includes('Alfred')) {
  names.push('Alfred');
}

const batmanIndex = names.indexOf('Batman');
if (batmanIndex !== -1) {
  names.splice(batmanIndex, 1);
}

function sumInput() {
  const numbers = [];
  while (true) {
    const value = prompt('Введіть число:', '');
    if (value === null || value === '' || isNaN(Number(value))) {
      break;
    }
    numbers.push(Number(value));
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
alert('Сума введених чисел: ' + sumInput());

const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');

const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = 'Classics';

const firstElement = styles.shift();
alert('Видалений елемент: ' + firstElement);

styles.unshift('Rap', 'Reggae');
