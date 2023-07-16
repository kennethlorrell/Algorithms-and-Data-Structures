const factorial = (num) => {
  if (x < 0) {
    return 0;
  }

  return num >= 1
    ? num * factorial(num - 1)
    : 1;
};

console.log(factorial(3));