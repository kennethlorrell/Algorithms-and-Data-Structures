const reverse = (str) => {
  return str.length > 1
    ? reverse(str.slice(1, str.length)) + str[0]
    : str;
};

console.log(reverse('abcdefg'));