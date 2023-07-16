import maxDigits from "./max_digits.js";
import getDigit from "./get_digit.js";

const radixSort = (arr) => {
  const temp = [];
  for (let i = 0; i < maxDigits(arr); i++) {
    for (let j = 0; j < arr.length; j++) {
      let currentDigit = getDigit(arr[j], i);
      if (!temp[currentDigit]) {
        temp[currentDigit] = [];
      }
      temp[currentDigit].push(arr[j]);
    }

    for (let k = 0; k < arr.length; k++) {

    }
    console.log(temp);
  }

  return arr;
};

console.log(radixSort([400, 700, 600, 300, 500]));

export default radixSort;