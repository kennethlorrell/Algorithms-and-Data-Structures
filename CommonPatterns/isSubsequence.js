const isSubsequence = (str1, str2) => {
  if (str1.length > str2.length) {
    return false;
  }

  for (let i = 0, j = 0; j <= str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
      console.log(i);
      if (i === str1.length) {
        return true;
      }
    }
  }
  return false;
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)