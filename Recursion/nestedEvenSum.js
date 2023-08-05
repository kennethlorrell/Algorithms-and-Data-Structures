const nestedEvenSum = (obj) => {
  if (typeof obj === 'number') {
    if (obj % 2 === 0) {
      return obj;
    }
  } else if (typeof obj === 'object') {
    return Object.values(obj).reduce((acc, item) => acc += nestedEvenSum(item), 0);
  }

  return 0;
};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: {
    b: 2,
    bb: {
      b: 3,
      bb: {
        b: 2
      }
    }
  },
  c: {
    c: {
      c: 2
    },
    cc: 'ball',
    ccc: 5
  },
  d: 1,
  e: {
    e: {
      e: 2
    }, ee: 'car'
  }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10