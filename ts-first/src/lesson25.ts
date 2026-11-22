// Завдання 1 (необов'язковий параметр last?)
const concatName = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

const result = concatName('John', 'Doe');
const result2 = concatName('John');

// Завдання 2
const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(' ');
};

// Завдання 3
const add = (a: number, b: number) => {
  return a + b;
};

// Завдання 4 (типізація колбеку makeChange: (user: User) => User)
type User = {
  id: string;
  name: string;
};

const modifyUser = (
  user: User[],
  id: string,
  makeChange: (user: User) => User,
) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

const users: User[] = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Jane' },
];

const updatedUsers = modifyUser(users, '1', (user) => {
  return { ...user, name: 'Waqas' };
});

console.log(result, result2);
console.log(concatTwoStrings('Hello', 'World'));
console.log(add(2, 3));
console.log(updatedUsers);

