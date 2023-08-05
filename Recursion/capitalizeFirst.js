const capitalizeFirst = (arr, result = []) => {
  if (!arr.length) {
    return result;
  }

  result.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  return capitalizeFirst(arr.slice(1), result);
};

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']