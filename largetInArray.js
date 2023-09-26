// largest number in an array

function largest(arr) {
  const len = arr.length;
  let large = arr[0];
  for (let i = 0; i < len; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }
  return large;
}

console.log("largest :", largest([10, 25, 23, 12, 5, 45, 100, 2, 10]));
