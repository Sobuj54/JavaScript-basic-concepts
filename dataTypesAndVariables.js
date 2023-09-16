/*
 There are 7 data types in js
 undefined , null, boolean, string, number, symbol and object
*/

// there are three ways to declare a variable

// 1.by using var keyword (learn more about var hoisting)
var myName = "sobuj";
// we can reinitialize variables that are declared using var keyword
myName = 1;
// console.log(myName);
// output will be 1

// adding or concatenating string
var str = "i am ";
str = str + "sobuj";
// console.log(str);
// output will be i am sobuj

// sting length
var strName = "sobuj";
console.log("string length :", strName.length);

// we can also access string characters like array indexing
console.log("indexing string :", strName[1]); //this way we can access string characters

var strWithMultipleQuotes = 'hi i am "sobuj" ahmed"'; //this way we can write string with quotes
console.log("sting with multiple quotes: ", strWithMultipleQuotes);

// remainder operator
var rem = 100 % 13;
console.log("remainder :", rem);

// some useful shorthands
var a = 10;
a = a + 10;
a += 10; //this is the shorthand of above code
a -= 10; //this is short hand for minus
a *= 10; //this is short hand for multiplication
a /= 10; // this is short hand for division
console.log(a);
