const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const middle = Math.round((start + end) / 2);

    if (value > arr[middle]) {
      start = middle;
    } else if (value < arr[middle]) {
      end = middle;
    } else {
      return middle;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))