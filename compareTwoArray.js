// check if two array is equal or not

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "not equal .they have different length";
  }
  const len = arr1.length;
  for (let i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return "not equal";
    }
  }
  return "equal";
}

console.log(
  "these two array is :",
  isEqual([10, 10, 20, 30], [10, 10, 20, 30])
);
