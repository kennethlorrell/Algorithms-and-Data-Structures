const productOfArray = (arr) => {
  return arr.length
    ? arr[0] * productOfArray(arr.slice(1))
    : 1
};

console.log(productOfArray([2, 3, 4]));