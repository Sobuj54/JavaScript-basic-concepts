// arrays can store all types of data inside..different data are separated by comma
var arr = ["sobuj", 64];
console.log(arr);
console.log(typeof arr);
// the type of array is object in javascript

// nested array
var arr = [
  ["sobuj", 64],
  ["ahmed", 54],
];
// changing array value with index..this is not possible in string
arr[0] = ["I", 69];

// inserting new data in array using push() method..we can push anything we want whether it be string,another array or object or number or any other data
arr.push({ name: "sobuj" });
console.log(arr);
// output : [ [ 'I', 69 ], [ 'ahmed', 54 ], { name: 'sobuj' } ]

// remove last element from array using pop() method
arr.pop();
console.log(arr);
// output after pop: [ [ 'I', 69 ], [ 'ahmed', 54 ] ]

// remove first element from array using shift() method
arr.shift();
console.log(arr);
// output after shift : [ [ 'ahmed', 54 ] ]

// add data to first index of an array using unshift() method
arr.unshift(["sobuj", 64]);
console.log("after using unshift() :", arr);
//output after using unshift() : [ [ 'sobuj', 64 ], [ 'ahmed', 54 ] ]

// ----------------------------->>-------------------->>
// concatenate two arrays
const concatenateArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenateArrays([1, 2], [3, 4, 5]));

// --------------->>----------------------->>
// array (...)spread operator..arrays can not be copied like other variables..we need use spread operator to properly copy array
var myArr = [10, 25, 12, 23];
var myArr2 = [...myArr];
myArr[2] = 50;
console.log(myArr);
console.log(myArr2);
