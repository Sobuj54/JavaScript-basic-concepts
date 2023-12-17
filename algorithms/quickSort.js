// quick sort algorithm

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const len = arr.length;
  const pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < len; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log("sorted :", quickSort([1, 2, 5, 0, 45, 23, 61, 32]));
