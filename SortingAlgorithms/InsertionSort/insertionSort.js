const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] >= currentValue) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort([10, 1, 18, 13, 8]));