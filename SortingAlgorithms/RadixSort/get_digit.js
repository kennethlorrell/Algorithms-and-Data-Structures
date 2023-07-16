const getDigit = (number, place) => {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
};

export default getDigit;
