const collectStrings = (obj, result = []) => {
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    Object.values(obj).forEach((item) => collectStrings(item, result));
  } else if (typeof obj === 'string') {
    return result.push(obj);
  } else {
    return false;
  }

  return result;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])