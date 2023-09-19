// random numbers with decimal  points

var randomNum = Math.random(); //Math.random() returns numbers between 0 and 1..the number can be 0 but can not be 1.
console.log(randomNum);

// --------------->>------------>>>
var randomWhole = Math.floor(Math.random() * 20); //this code will generate number form 0 to 19 but the number will never be 20
console.log(randomWhole);

// -------------->>------------>>>
// random number in a given range

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //this code will generate any number from 14,15,16
}

const randNumber = randomNumberInRange(14, 16);
console.log(randNumber);
