const maxSubarraySum = (arr, length) => {
  if (length > arr.length) {
    return null;
  }
  
  let maxSum = 0

  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = 0, j = length; j < arr.length; i++, j++) {
    tempSum += arr[j] - arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null