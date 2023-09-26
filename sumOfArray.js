// sum of all the elements in an array

function sum(arr) {
  const len = arr.length;
  let total = 0;
  for (let i = 0; i < len; i++) {
    total += arr[i];
  }
  return total;
}

console.log("the sum is :", sum([10, 20, 30]));

// sum using reduce method
function total(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log("total :", total([10, 10, 20]));
