import digitCount from "./digitCount.js";

const maxDigits = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }

  return max;
};

export default maxDigits;