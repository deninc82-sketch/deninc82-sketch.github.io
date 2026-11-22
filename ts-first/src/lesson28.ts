// Завдання 1: Базове наслідування та виклик super()
class Worker {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  work(): string {
    return `${this.name} працює.`;
  }
}

class Developer extends Worker {
  programmingLanguage: string;

  constructor(name: string, programmingLanguage: string) {
    super(name);
    this.programmingLanguage = programmingLanguage;
  }

  override work(): string {
    return `${this.name} пише код на ${this.programmingLanguage}.`;
  }
}

// Завдання 2: Використання super.method()
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  side: number;

  constructor(side: number) {
    super(side, side);
    this.side = side;
  }

  describe(): string {
    return `Квадрат зі стороною ${this.side} має площу ${super.getArea()}`;
  }
}

// Завдання 3: Модифікатори доступу та наслідування (protected)
class BankAccount {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}

class SavingsAccount extends BankAccount {
  addInterest(rate: number): void {
    this.balance += this.balance * (rate / 100);
  }

  getBalance(): number {
    return this.balance;
  }
}

// Перевірка роботи
const worker = new Worker('Іван');
console.log(worker.work());

const dev = new Developer('Олена', 'TypeScript');
console.log(dev.work());

const square = new Square(5);
console.log(square.describe());

const account = new SavingsAccount(1000);
account.deposit(500);
account.addInterest(10);
console.log('Баланс:', account.getBalance()); // 1650