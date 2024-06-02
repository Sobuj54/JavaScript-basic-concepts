// array declarations
const arr = [1, 5, 3, 4, 6];
console.log(arr);

const myArr = new Array(1, 5, 4, 3, 5, 1);
console.log(myArr);

// ----------------------->>>>>>>>>>>>>>>>>>>>
// Array methods
arr.push(10);
console.log("after push: ", arr);
arr.pop();
console.log("after pop: ", arr);

arr.unshift(20); //adds 20 at 0 index
console.log("after unshift: ", arr);
arr.shift(); //removes element from 0 index
console.log("after shift: ", arr);

const string = arr.join(",");
console.log(string);

// slice and splice
const slicedArr = arr.slice(1, 3); //slice doesn't mutate original array
console.log("after slice: ", slicedArr);
console.log("no mutation: ", arr);

const spliceArr = arr.splice(1, 3); //splice mutates original array
console.log("after splice: ", spliceArr);
console.log("mutation happened in main array: ", arr);
