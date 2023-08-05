const someRecursive = (arr, callback) => {
  if (!arr.length) {
    return false;
  }

  return callback(arr.pop())
    ? true
    : someRecursive(arr, callback);
};

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false