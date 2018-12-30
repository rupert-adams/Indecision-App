var nameVar = 'Rupert';
var nameVar = 'Steve';
console.log('nameVar', nameVar);
// var allows you to redefine variables, possibly leading to problems with renaming

let nameLet = 'Vanda';
nameLet = 'Smeg';
console.log('nameLet', nameLet);
// let allows you to change variable values

const nameConst = 'Digby';
console.log('nameConst', nameConst);
//const doesn't let you re-assign values for variables

var fullName = 'Rupert Adams';

let firstName;

if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
//let and const are block scoped, meaning they can only be accesed from inside scope,
// if you want to use them outside declare them outside
console.log(firstName);
