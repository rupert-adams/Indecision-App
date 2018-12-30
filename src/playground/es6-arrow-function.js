function square (x){
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x
// };

const squareArrow = (x) => x * x;
// These two are both arrow function syntax, the bottom one implicitly returns.


console.log(square(8));
console.log(squareArrow(9));


//Challenge, use arrow functions to get first name:

let getFirstName = (name) => name.split(' ')[0];

let getFirstNameTwo = (name) => {
  return name.split(' ')[0];
};

console.log(getFirstName('Rupert Adams'));
console.log(getFirstNameTwo('Vanda Adams'));
