/*

conversion functions

1. Number()
2. String()
3.Boolean()
4. Symbol()
*/

const score = "77";
console.log(typeof score); //string
const num = Number(score);
console.log(typeof num); //number

const truth = true;
console.log(typeof truth);
const n = Number(truth);
console.log(n);

const id = Symbol("123");
const another = Symbol("123");
console.log(id == another);

/*
1. true => 1
2. false => 0
*/

const name = "";
console.log(Boolean(name));

/*
1. "" => false
2. " " => true
3. "sobuj" => true
*/

const value = 3;
const negativeValue = -value;
console.log(negativeValue); //-3

console.log(2 * 2); //normal multiplication
console.log(2 ** 3); //2^3
