import mergeTwoSortedArrays from "./mergeTwoSortedArrays.js";

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const firstHalf = mergeSort(arr.slice(0, middle));
  const secondHalf = mergeSort(arr.slice(middle));

  return mergeTwoSortedArrays(firstHalf, secondHalf);
};

console.log(mergeSort([900, 600, 400, 800, 300, 100, 200, 700, 500]));
