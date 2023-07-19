const mergeTwoSortedArrays = (arr1, arr2) => {
  const result = [];

  for (let index1 = 0, index2 = 0; index1 < arr1.length || index2 < arr2.length;) {
    if (index1 >= arr1.length) {
      result.push(...arr2.slice(index2));
      break;
    }
    if (index2 >= arr2.length) {
      result.push(...arr1.slice(index1));
      break;
    }

    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else if (arr1[index1] > arr2[index2]) {
      result.push(arr2[index2]);
      index2++;
    } else {
      result.push(arr1[index1], arr2[index2]);
      index1++;
      index2++;
    }
  }

  return result;
};

export default mergeTwoSortedArrays;
