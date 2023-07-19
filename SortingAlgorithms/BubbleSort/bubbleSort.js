import swap from '../utils/swap.js';

const bubbleSort = (arr) => {
  let isSwapped = true;

  for (let i = arr.length - 1; i > 0; i--) {
    isSwapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j);
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      break;
    }
  }

  return arr;
};

console.log(bubbleSort([6, 1, 8, 15, 3]));
