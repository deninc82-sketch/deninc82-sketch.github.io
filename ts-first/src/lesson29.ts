// Завдання 1: wrapInArray
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numArr = wrapInArray(42); // Має мати тип number[]
const strArr = wrapInArray('hello'); // Має мати тип string[]

// Завдання 2: getLength
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

console.log(getLength([1, 2, 3])); // 3
console.log(getLength('TypeScript')); // 10
// @ts-expect-error у number немає властивості length
getLength(123);

// Завдання 3: first
function first<T>(coll: Array<T>): T | null {
  return coll[0] ?? null;
}

console.log(first([])); // null
console.log(first([3, 2])); // 3
console.log(first(['code-basics', 'hexlet'])); // 'code-basics'

// Завдання 4: getProperty
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'Олена' };
console.log(getProperty(user, 'name')); // 'Олена'
// @ts-expect-error 'age' не існує в user
getProperty(user, 'age');
