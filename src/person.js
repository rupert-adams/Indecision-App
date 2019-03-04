// named export isAdult(18) - true if adult, otherwise false
// canDrink(18) true if adult, otherwise false.

console.log('person.js is working');

export const isAdult = (age) => age >= 18;

export const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export default isSenior
