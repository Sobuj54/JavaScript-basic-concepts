// find the index of an element in an array

function findElement(arr, element) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (element === arr[i]) {
      return i;
    }
  }
  return "element is not in the array";
}

console.log("index is :", findElement([10, 20, 32, 14], 14));

// find index using find() method
function findIndex(arr, target) {
  const value = arr.find((i) => i === target);
  if (value) {
    return arr.indexOf(value);
  }
  return "no match found";
}
console.log("index :", findIndex([10, 20, 14, 25], 25));
