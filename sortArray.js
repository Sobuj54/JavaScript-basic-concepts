// sort an array

function sortAnArray(arr) {
  let swapped;
  const len = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log("sorted array :", sortAnArray([10, 20, 20, 25, 14, 30, 11]));

// sort using sort() method
function sortArray(arr) {
  // this will sort array in ascending order
  //   return arr.sort((first, second) => first - second);
  //   this will sort array in descending order
  return arr.sort((first, second) => second - first);
}

console.log("sorted :", sortArray([10, 25, 14, 23, 15, 18]));

// --------->>------------------>>>
// bubble sort using for loops only

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("bubble sort :", bubbleSort([10, 25, 1, 42, 51, 21, 11]));
