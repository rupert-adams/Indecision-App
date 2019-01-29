
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
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name = 'Anon', age = 0, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description = description += ` And they major in ${this.major}`
    }

    return description;
  }
}

// traveller < Person
// home location support
// overide getGreeting to add home location if it exists

class Traveller extends Person {
  constructor(name = 'Anon', age = 0, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hasLocation()) {
      greeting = greeting += ` And I am visiting from ${this.homeLocation}.`
    }

    return greeting;
  }
}

const me = new Student('Rupert Adams', 27, 'Computer Science');
const again = new Traveller('Rupert Adams', 27, 'London');
console.log(me.getGreeting());
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());
console.log(again.getGreeting());

const other = new Student();

console.log(other.getGreeting());
console.log(other);
console.log(other.hasMajor());
console.log(other.getDescription());
