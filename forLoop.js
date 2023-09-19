var arr = [];

for (var i = 0; i < 10; i++) {
  var e = 10;
  arr.push(i);
}
console.log(arr);

// pushing even numbers in array
var arr2 = [];

for (var i = 0; i < 10; i += 2) {
  arr2.push(i);
}
console.log(arr2);

// iterating array backwards
var arr3 = [];
for (var i = 10; i > 0; i--) {
  arr3.push(i);
}
console.log(arr3);

// iterating through an array
var myArr = [10, 15, 25, 32, 14];
let sum = 0;
for (var i = 0; i < myArr.length; i++) {
  sum += myArr[i];
}
console.log(sum);

// -------------->>----------------->>
// working with multi-dimension array
function multi(multiArr) {
  var initialValue = 0;

  for (var i = 0; i < multiArr.length; i++) {
    for (var j = 0; j < multiArr[i].length; j++) {
      initialValue += multiArr[i][j];
    }
  }
  return initialValue;
}

var multiply = multi([
  [1, 1],
  [1, 1, 1],
  [1, 1, 1, 1],
]);
console.log(multiply);
