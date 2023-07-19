import swap from "../utils/swap.js";

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }

    if (minValueIndex !== i) {
      swap(arr, minValueIndex, i);
    }
  }

  return arr;
};

console.log(selectionSort([1, 1, 13, 18, 8, 3]));