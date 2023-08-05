const capitalizeWords = (arr, result = []) => {
  if (typeof arr === 'string') {
    return result.push(arr.toUpperCase());
  } else if (Array.isArray(arr)) {
    arr.forEach((item) => capitalizeWords(item, result));
  }

  return result;
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']