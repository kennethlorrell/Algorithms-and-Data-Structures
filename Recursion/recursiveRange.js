const recursiveRange = (num) => {
  return num !== 0
    ? num + recursiveRange(num - 1)
    : 0;
};

console.log(recursiveRange(5));