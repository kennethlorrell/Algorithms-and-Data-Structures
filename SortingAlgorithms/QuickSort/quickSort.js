import pivotHelper from "./pivotHelper.js";

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([500, 300, 200, 600, 700, 100, 400]));
