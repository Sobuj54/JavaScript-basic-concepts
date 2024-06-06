// function definition : it is hoisted at the top by default
function add(a = 1, b = 1) {
  //it has default parameters
  console.log(a + b);
}
add(10, 20);

// function expression : It is not hoisted so we cant access it before declaration
const express = function () {
  console.log("function expression");
};
express();

// function with return statement
function multi(a, b) {
  return a * b;
}
const val = multi(10, 20);
console.log("multi: ", val);

// ---------------passing array to function
const arr = [10, 25, 13, 25, 10];
function showArr(arr) {
  console.log(arr);
}
showArr(arr);

// -----------------passing object to function
const obj = {
  fullName: "sobuj ahmed",
  age: 24,
};

function showObj(obj) {
  console.log(obj);
}
showObj(obj);
