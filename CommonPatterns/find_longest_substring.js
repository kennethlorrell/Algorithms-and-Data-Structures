const findLongestSubstring = (str) => {
  let longestStr = 0;
  let swap = 0;

  for (let i = 0, j = 1; j < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      longestStr++;
    } else {
      swap = Math.max(longestStr, swap);
      longestStr = 0;
    }
  }
  return swap;
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6