import swap from "../utils/swap.js";

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivotIndex = start;
  const pivot = arr[pivotIndex];

  for (let i = pivotIndex + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start,  pivotIndex);

  return pivotIndex;
};

export default pivotHelper;
