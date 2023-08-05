const stringifyNumbers = (obj, result = {}) => {
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    Object.entries(obj).map(([key, value]) => (
      result[key] = stringifyNumbers(value)
    ));
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else {
    return obj;
  }

  return result;
};

const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));