
// set up constructor to take name and age, default to 0
// getDescription will return a string, taking into account the persons age - name is age years old.

class Person {
  constructor(name = 'Anon', age = 0) {
    this.name = name;
    this.age = age
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person('Rupert Adams', 27);

console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();

console.log(other.getGreeting());
console.log(other.getDescription());
