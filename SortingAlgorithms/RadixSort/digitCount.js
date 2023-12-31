const digitCount = (number) => {
  if (number === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

export default digitCount;
