// Завдання 1
let example1: string = 'Hello World!';
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;

// Завдання 2
const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(' ');
};

// Завдання 3
const add = (a: number, b: number) => {
  return a + b;
};

console.log(example1, example2, example3, example4, example5);
console.log(concatTwoStrings('Hello', 'TypeScript'));
console.log(add(5, 10));
