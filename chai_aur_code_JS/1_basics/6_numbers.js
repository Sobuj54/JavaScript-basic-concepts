const num = 100.2564;
console.log(num);
console.log(num.toFixed(2)); //this returns a string

const largeNum = 10000000;
console.log(largeNum.toLocaleString("en-IN")); //1,00,00,000 converting in this readable format

// ------------------->>>>>>>>>>>>>>>>>>>>>>>>>>
// Math object in js
// console.log("absolute value: ", Math.abs(-5)); //5
// console.log("rounded: ", Math.round(5.6)); //6
// console.log(Math.round(5.5)); //6
// console.log(Math.round(5.4)); //5
// console.log(Math.ceil(5.4)); //6
// console.log(Math.floor(5.4)); //5
// console.log("power: ", Math.pow(5, 2)); //25
// console.log("sqrt: ", Math.sqrt(25)); //5
// console.log("max: ", Math.max(25, 20, 50, 30)); // max 50
// console.log("min: ", Math.min(25, 20, 50, 30)); // min 20

// ----------->>>>>>>>>>>>>>>>>>> Random
console.log("random: ", Math.round(Math.random() * 100)); //it will produce values from 0 to 99

// generate random numbers in a certain range
const min = 10;
const max = 30;
console.log("in a range: ", Math.floor(Math.random() * (max - min + 1) + min));
