// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};


console.log(add(55, 1))
// this keyword - no longer bound with arrow functions

const user = {
  name: 'Rupert',
  city: ['London', 'Budapest', 'Debrecen'],
  printPlacesLived() {
    return this.city.map((place) => this.name + ' has lived in ' + place);
  }
};

console.log(user.printPlacesLived());

// chalenge area

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
