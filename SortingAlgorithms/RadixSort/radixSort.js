import maxDigits from "./maxDigits.js";
import getDigit from "./getDigit.js";

const radixSort = (arr) => {
  const maxDigitsCount = maxDigits(arr);

  for (let i = 0; i < maxDigitsCount; i++) {
    let digitBuckets = Array.from(
      { length: 10 },
      () => []
    );

    for (let j = 0; j < arr.length; j++) {
      let currentDigit = getDigit(arr[j], i);
      digitBuckets[currentDigit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
};

console.log(radixSort([455, 23, 15, 48, 100, 1, 11, 2]));

export default radixSort;
