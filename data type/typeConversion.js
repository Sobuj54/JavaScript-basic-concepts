/*
Type conversion, also known as type casting, is the explicit conversion of a value from one data type to another. This conversion is done explicitly in the code by the programmer.

JavaScript provides various methods and functions for type conversion.For example :

The programmer initiates type conversion using functions like String(), Number(), or Boolean().
*/

const num = 40;
// converting from number to string using String() function.
const numStr = String(40);
console.log(num, numStr);

const str = "50";
// converting from string to number using Number() function
const number = Number(str);
console.log(str, number);

const str2 = "sobuj";
console.log(str2, Number(str2));
// here the output will be sobuj NaN because 'sobuj' can not be converted to number.
