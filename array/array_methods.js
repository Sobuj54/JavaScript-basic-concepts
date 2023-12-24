const arr = [10, 20, 12, 14, 25, 13];

// push an element to the last index of an array
arr.push(50);
// output: [10, 20, 12, 14,25, 13, 50]

// inserts a new element to the first index of an array
arr.unshift(100);
// output: [100, 10, 20, 12, 14,25, 13, 50]

// remove last element from an array
arr.pop();
// output: [100, 10, 20, 12, 14,25, 13]

// remove first element from an array
arr.shift();
// output : [ 10, 20, 12, 14,25, 13, 50]

// find index of an element in an array
console.log(arr.indexOf(25));
// output : 4

// check if an element exists in an array
console.log(arr.includes(12));
// output : true
