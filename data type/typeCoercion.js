/*
Type coercion, on the other hand, is the automatic conversion of values between different types during expressions or operations.

JavaScript is a loosely typed language, which means that the interpreter may automatically perform type coercion to make operations possible.

For example, when you use the + operator with different types, JavaScript will attempt to coerce the values to the same type before performing the addition
*/

const result = 10 + "4";
console.log(result);
// the result will be 104 which will also be a string. Here 4 is converted to string to perform + operation.

// type coercion is not the same for (- , * , /) operators
const res = 10 - "4";
console.log(res);
// the output will be 6 which will also be a number. Here 4 string is converted to number to perform - operation.

// for *, -, / operators the strings will be converted to numbers.
